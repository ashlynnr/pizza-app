import React, { Component } from "react"
import styled from "styled-components"
import Section from "./Section"
import { connect } from "react-redux"
import {
  selectCrust,
  selectSauce,
  selectCheese,
  addTopping,
  removeTopping,
  getPizza,
  deselectAll
} from "../redux/pizza/actions"
import ingredients from "../utils/data"
import { calculatePrice, formatPrice } from "../utils/Helpers"
import CheckoutModal from "./CheckoutModal"
import { Button } from "./CheckoutModal"

class SideBar extends Component {
  state = {
    showModal: false
  }

  render() {
    const { pizza } = this.props
    const price = calculatePrice(pizza, ingredients)
    return (
      <Container>
        <Section
          title="Crust"
          options={ingredients.crust}
          onSelect={this.props.selectCrust}
        />
        <Section
          title="Sauce"
          options={ingredients.sauce}
          onSelect={this.props.selectSauce}
        />
        <Section
          title="Cheese"
          options={ingredients.cheese}
          onSelect={this.props.selectCheese}
        />
        <Section
          type="checkbox"
          title="Toppings"
          options={ingredients.toppings}
          onSelect={(isAdded, topping) => {
            isAdded
              ? this.props.addTopping(topping)
              : this.props.removeTopping(topping)
          }}
        />
        <PriceSection>
          <p>Total: {formatPrice(price)}</p>
          <Button onClick={() => this.setState({ showModal: true })}>
            Checkout
          </Button>
        </PriceSection>
        {this.state.showModal && (
          <CheckoutModal
            closeModal={() => this.setState({ showModal: false })}
            pizza={pizza}
            price={formatPrice(price)}
            newOrder={this.props.deselectAll}
          />
        )}
      </Container>
    )
  }
}

const mapDispatchToProps = {
  selectCrust,
  selectSauce,
  selectCheese,
  addTopping,
  removeTopping,
  getPizza,
  deselectAll
}

export default connect(
  state => state,
  mapDispatchToProps
)(SideBar)

const Container = styled.div`
  width: 100%;
  font-family: ${props => props.theme.fontFamily};
`

const PriceSection = styled.div`
  padding: 20px 40px;
  text-align: center;
  font-weight: 700;
  background: ${props => props.theme.red};
  color: white;
  border-radius: 5px;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
`
