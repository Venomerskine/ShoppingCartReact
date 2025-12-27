import { renderHook, act, expect, test } from "@testing-library/react";
import { CartProvider, useCart } from "./CartContext";

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

const product = { id: 1, title: "Test Product", price: 10 };

test("adds item to cart correctly", () => {
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.addToCart(product, 2);
  });

  expect(result.current.cartItems.length).toBe(1);
  expect(result.current.cartItems[0].quantity).toBe(2);
  expect(result.current.totalPrice).toBe(20);
});

test("increase and decrease quantity", () => {
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.addToCart(product, 1);
  });

  act(() => {
    result.current.increase(1);
  });

  expect(result.current.cartItems[0].quantity).toBe(2);

  act(() => {
    result.current.decrease(1);
  });

  expect(result.current.cartItems[0].quantity).toBe(1);
});
