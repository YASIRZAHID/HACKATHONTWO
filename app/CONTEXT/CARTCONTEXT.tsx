import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  picture: string;
  name: string;
  category: string;
  price: string;
  discount: string;
  gender: string;
  priority: string;
  productNumber: string;
  quantity:string | '1';
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productNumber: string) => void;
  updateCart: (newCartItems: CartItem[]) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (productNumber: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.productNumber !== productNumber)
    );
  };

  const updateCart = (newCartItems: CartItem[]) => {
    setCartItems(newCartItems);
  };

  const contextValue: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
