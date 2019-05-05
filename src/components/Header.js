import React from "react"
import styled from "styled-components"

const Header = () => {
  return <Container>Build a Pizza</Container>
}

export default Header

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props => props.theme.red};

  @media (max-width: 1200px) {
    grid-template-columns: auto;
  }
`
