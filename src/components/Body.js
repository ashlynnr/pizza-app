import React, { Component } from "react";
import SideBar from "./SideBar";
import Pizza from "./Pizza";
import styled from "styled-components";

export default class Body extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Pizza />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: auto;
  }
`;
