import React, { Component } from "react"
import ModalContent from "./ModalContent"
import styled from "styled-components"
import { tsImportEqualsDeclaration } from "@babel/types"

class Modal extends Component {
  constructor() {
    super()
    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    })
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    })
  }

  render() {
    return (
      <>
        {this.state.isShowing ? (
          <Backdrop onClick={this.closeModalHandler} />
        ) : null}
        <Button onClick={this.openModalHandler}>Checkout</Button>

        <ModalContent
          pizza={this.props.pizza}
          price={this.props.price}
          newOrder={this.props.newOrder}
          show={this.state.isShowing}
          close={this.closeModalHandler}
        />
      </>
    )
  }
}

export default Modal

const Backdrop = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  margin: auto;
  background-color: rgba(48, 49, 48, 0.42);
  height: 100%;
  /* position: fixed; */
  transition: all 1.3s;
  width: 100%;
  z-index: 99;
`

const Button = styled.button`
  margin: 15px;
  padding: 10px;
  text-align: center;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  color: #666666;
  outline: none;
  font-size: 1.2em;
`
