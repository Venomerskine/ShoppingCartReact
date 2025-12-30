import { render, screen, fireEvent, test, expect } from "@testing-library/react";
import { CartProvider, useCart } from "../context/CartContext";
import Cart from "./cart";

const AddItem = () => {
  const { addToCart } = useCart();
  addToCart({ id: 1, title: "Test", price: 5 }, 1);
  return null;
};

test("increase and decrease cart quantity", () => {
  render(
    <CartProvider>
      <AddItem />
      <Cart />
    </CartProvider>
  );

  fireEvent.click(screen.getByText(/increase/i));

  expect(screen.getByText(/count: 2/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/decrease/i));

  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
