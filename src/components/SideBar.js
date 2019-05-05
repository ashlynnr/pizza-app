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
  getPizza
} from "../redux/pizza/actions"
import ingredients from "../utils/data"
import { calculatePrice, formatPrice } from "../utils/Helpers"

class SideBar extends Component {
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
        </PriceSection>
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
  getPizza
}

export default connect(
  state => state,
  mapDispatchToProps
)(SideBar)

const Container = styled.div`
  width: 100%;
`

const PriceSection = styled.div`
  background: ${props => props.theme.white};
  padding: 20px 40px;
  text-align: center;
  font-weight: 700;
  background: ${props => props.theme.red};
  color: white;
  border-radius: 5px;
`
