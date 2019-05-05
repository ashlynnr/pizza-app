import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPizza } from "../redux/pizza/actions";
import { adjustPrice } from "../redux/checkout/actions";
import { formatPrice } from "../utils/Helpers";

const Section = ({ title, options, pizza, onSelect, type = "radio" }) => {
  const [showOptions, setShowOptions] = useState(true);

  const selectHandler = e => {
    if (type === "checkbox") {
      onSelect(e.target.checked, e.target.value);
    } else {
      onSelect(e.target.value);
    }
  };

  const checkIngredient = option => {
    return type === "checkbox"
      ? pizza && pizza[title.toLowerCase()].includes(option)
      : pizza && pizza[title.toLowerCase()] === option;
  };

  return (
    <Container>
      <Header onClick={() => setShowOptions(!showOptions)}>
        <h1>{title}</h1>
      </Header>
      {showOptions && (
        <OptionsContainer>
          {options.map(option => (
            <CheckboxContainer>
              <label>
                <input
                  type={type}
                  name={title}
                  value={option.name}
                  checked={checkIngredient(option.name)}
                  onChange={selectHandler}
                />{" "}
                {option.name
                  .replace(/-/g, " ")
                  .replace(/(\b[a-z](?!\s))/g, str => str.toUpperCase())}
                {option.price !== 0 && ` + ${formatPrice(option.price)}`}
              </label>
            </CheckboxContainer>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

const mapDispatchToProps = {
  getPizza,
  adjustPrice
};

export default connect(
  state => state,
  mapDispatchToProps
)(Section);

const Container = styled.div`
  background: ${props => props.theme.white};
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Header = styled.button`
  width: 100%;
  padding: 10px;
  text-align: center;
  background: ${props => props.theme.red};
  box-shadow: 0 2px 4px -4px black;
  color: white;
  outline: none;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 5px;
  }
`;

const CheckboxContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
