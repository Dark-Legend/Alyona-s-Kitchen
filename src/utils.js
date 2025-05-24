export const getColorForPath = (path) => {
  const routeColor = {
    "/": "bg-amber-700 hover:bg-amber-600",
    cart: "#E67E22",
    checkout: "#E67E22",
  };
  return routeColor[path];
};

export const addFoodToCart = (item, price) => {
  const foodPrice = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  let foodItem = price ? item : { ...item, price: foodPrice };
  const existingItem = JSON.parse(localStorage.getItem("cartItems"));

  const items = existingItem?.map((val) => val?.idMeal);
  const filterMeal = !items?.includes(foodItem?.idMeal);
  if (existingItem?.length) {
    if (filterMeal) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...existingItem, foodItem])
      );
    }
  } else {
    localStorage.setItem("cartItems", JSON.stringify([foodItem]));
  }
};
