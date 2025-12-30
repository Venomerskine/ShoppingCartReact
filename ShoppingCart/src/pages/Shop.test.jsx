import { render, screen, fireEvent, test, expect } from "@testing-library/react";
import { CartProvider } from "../context/CartContext";
import Shop from "./shop";

test("renders shop and adds product to cart", async () => {
  render(
    <CartProvider>
      <Shop />
    </CartProvider>
  );

  const addButtons = await screen.findAllByText(/add to cart/i);

  fireEvent.click(addButtons[0]);

  // Badge or navbar count should show 1
  expect(screen.getByText(/cart: 1/i)).toBeInTheDocument();
});
