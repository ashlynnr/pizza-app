import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import panCrust from "../images/pan-crust.webp";
import glutenFreeCrust from "../images/gluten-free-crust.webp";
import originalCrust from "../images/og-crust.webp";
import cheese from "../images/cheese-pizza.webp";
import bellPeppers from "../images/bell-peppers.webp";
import chicken from "../images/chicken.webp";
import ham from "../images/ham.webp";
import meatballs from "../images/meatballs.webp";
import mushrooms from "../images/mushrooms.webp";
import pepperoni from "../images/pepperoni.webp";
import redOnions from "../images/red-onions.webp";
import sausage from "../images/sausage.webp";
import spinach from "../images/spinach.webp";
import tomatoes from "../images/tomatoes.webp";

const Pizza = props => {
  const renderIngredient = (image, ingredient) => {
    if (props.pizza.toppings.includes(ingredient)) {
      return image;
    }
  };

  return (
    <Container>
      {props.pizza.crust === "pan" && <Image src={panCrust} alt="" />}
      {props.pizza.crust === "original" && <Image src={originalCrust} alt="" />}
      {props.pizza.crust === "gluten-free" && (
        <Image src={glutenFreeCrust} alt="" />
      )}
      <Image src={cheese} alt="" />
      {renderIngredient(<Image src={chicken} alt="" />, "grilled-chicken")}
      {renderIngredient(<Image src={sausage} alt="" />, "italian-sausage")}
      {renderIngredient(<Image src={ham} alt="" />, "ham")}
      {renderIngredient(<Image src={meatballs} alt="" />, "meatballs")}
      {renderIngredient(<Image src={pepperoni} alt="" />, "pepperoni")}
      {renderIngredient(<Image src={redOnions} alt="" />, "red-onions")}
      {renderIngredient(<Image src={mushrooms} alt="" />, "mushrooms")}
      {renderIngredient(<Image src={spinach} alt="" />, "spinach")}
      {renderIngredient(
        <Image src={bellPeppers} alt="" />,
        "green-bell-peppers"
      )}
      {renderIngredient(<Image src={tomatoes} alt="" />, "roma-tomatoes")}
    </Container>
  );
};

export default connect(state => state)(Pizza);

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 500px;
`;
