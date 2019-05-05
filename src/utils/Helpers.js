export const formatPrice = number => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return formatter.format(number);
};

export const calculatePrice = (pizza, ingredients) => {
  const crustPrice = ingredients.crust.filter(
    data => data.name === pizza.crust
  )[0].price;
  const saucePrice = ingredients.sauce.filter(
    data => data.name === pizza.sauce
  )[0].price;
  const cheesePrice = ingredients.cheese.filter(
    data => data.name === pizza.cheese
  )[0].price;
  let toppingPrice = [];
  ingredients.toppings
    .filter(data => pizza.toppings.includes(data.name))
    .map(data => toppingPrice.push(data.price));

  return (
    10 +
    crustPrice +
    saucePrice +
    cheesePrice +
    toppingPrice.reduce((a, b) => a + b, 0)
  );
};
