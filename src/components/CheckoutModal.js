import React, { useRef } from "react"
import styled from "styled-components"
import { useClickAway } from "react-use"

export default function CheckoutModal({ closeModal, pizza, price, newOrder }) {
  const modalRef = useRef(null)
  useClickAway(modalRef, closeModal)
  const formatIngredient = ingredient => {
    return ingredient
      .replace(/-/g, " ")
      .replace(/(\b[a-z](?!\s))/g, str => str.toUpperCase())
  }
  return (
    <ModalContainer>
      <Modal ref={modalRef}>
        <Title>Here is your pizza!</Title>
        <Body>
          <p>{formatIngredient(pizza.crust)} Crust</p>
          <p>
            {formatIngredient(pizza.sauce)} {pizza.sauce !== "none" && `Sauce`}
          </p>
          <p>{formatIngredient(pizza.cheese)}</p>
          <p>
            Toppings:{" "}
            {pizza.toppings.map(data => formatIngredient(data)).join(", ")}
          </p>
          <p>Total: {price}</p>
        </Body>
        <ButtonContainer>
          <Button onClick={() => newOrder() & closeModal()}>Restart</Button>
          <Button onClick={closeModal}>Edit</Button>
        </ButtonContainer>
      </Modal>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`

const Modal = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  display: grid;
  grid-gap: 10px;
`

const Title = styled.h1`
  background: ${props => props.theme.red};
  padding: 20px;
  text-align: center;
  color: white;
`

const Body = styled.div`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 600;
`

const ButtonContainer = styled.div`
  background: ${props => props.theme.red};
  display: flex;
  justify-content: space-around;
  padding: 20px;
`

export const Button = styled.button`
  background: ${props => props.theme.white};
  border-radius: 5px;
  min-width: 100px;
  border: none;
  padding: 5px 10px;
  color: black;
  font-size: 18px;
  outline: none;
  transform: 0.5s all;

  :focus {
    opacity: 0.8;
  }
`
