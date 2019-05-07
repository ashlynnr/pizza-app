import React, { Component } from "react"
// import SideBar from "./SideBar";
// import Pizza from "./Pizza";
import styled from "styled-components"
const ModalContent = props => {
  const formatIngredient = ingredient => {
    console.log(ingredient)
    return ingredient
      .replace(/-/g, " ")
      .replace(/(\b[a-z](?!\s))/g, str => str.toUpperCase())
  }
  return (
    <ModalContainer
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <ModalHeader>Congrats! You made a pizza.</ModalHeader>
      <ModalBody>
        Order Details: <br /> <br /> - 1 Medium Pizza <br />-{" "}
        {formatIngredient(props.pizza.crust)} Crust <br />-{" "}
        {formatIngredient(props.pizza.sauce)} Sauce <br />-{" "}
        {formatIngredient(props.pizza.cheese)} <br />- Toppings:{" "}
        {props.pizza.toppings.map(data => formatIngredient(data)).join(", ")}{" "}
        <br />
        <br />
        {/* {formatIngredient(props.pizza.toppings)} <br /> */}
        Total: {props.price}{" "}
      </ModalBody>
      <ModalFooter>
        <Button onClick={e => props.newOrder() & props.close()}>
          New Order
        </Button>
        <Button onClick={props.close}>Edit Current Order</Button>
      </ModalFooter>
    </ModalContainer>
  )
}
export default ModalContent

const ModalContainer = styled.div`
  background: ${props => props.theme.white};
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 black, 0 7px 20px 0 black;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 40%;
  z-index: 100;
  transition: all 0.8s;
  display: grid;
  grid-template-rows: 20% 60% 20%;
`

const ModalHeader = styled.div`
  background: ${props => props.theme.darkGrey};
  border-radius: 10px 10px 0px 0px;
  line-height: 40px;
  padding: 20px 20px;
  text-align: left;
  font-size: 1.5em;
`

const ModalBody = styled.div`
  padding: 10px 15px;
  text-align: left;
  color: black;
  font-size: 1.2em;
`
const ModalFooter = styled.div`
  background: ${props => props.theme.darkGrey};
  padding: 15px;
  border-radius: 0px 0px 10px 10px;
`

// const CloseButton = styled.button`
//   color: white;
//   cursor: pointer;
//   float: right;
//   font-size: 30px;
//   margin: 0;
//   /* :hover: {
//     color: black;
//   } */
// `

const Button = styled.button`
  margin: 0px 15px;
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

/* //   @media (max-width: 1200px) {
//     grid-template-columns: auto;
//   }
// `; */
