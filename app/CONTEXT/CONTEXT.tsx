import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartCountContextProps {
  cartCount: number;
  setNewCartCount: (newCount: number) => void;
}

const CartCountContext = createContext<CartCountContextProps | undefined>(
  undefined
);

interface CartCountProviderProps {
  children: ReactNode;
}

export function CartCountProvider({ children }: CartCountProviderProps) {
  const [cartCount, setCartCount] = useState(0);

  const setNewCartCount = (newCount: number) => {
    setCartCount(newCount);
  };

  const contextValue: CartCountContextProps = {
    cartCount,
    setNewCartCount,
  };

  return (
    <CartCountContext.Provider value={contextValue}>
      {children}
    </CartCountContext.Provider>
  );
}

export function useCartCount() {
  const context = useContext(CartCountContext);
  if (!context) {
    throw new Error("useCartCount must be used within a CartCountProvider");
  }
  return context;
}
