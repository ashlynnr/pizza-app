import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"

import styled, { createGlobalStyle } from "styled-components"

const App = () => {
  return (
    <Container>
      <Inner>
        <Header />
        <Body />
      </Inner>
      <GlobalStyle />
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
`

const GlobalStyle = createGlobalStyle`
  body {
    background: #f0e3e3;
    color: #4E4646;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    margin: 0;
  }
  h1 {
    font-size: 25px;
    margin: 0;
    
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
  label {
    font-size: 18px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  button {
    :hover {
      cursor: pointer;
    }
  }
`
