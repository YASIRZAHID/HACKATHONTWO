import React, { createContext, useContext, ReactNode, useState } from 'react';

interface Product {
  picture: string
  name: string;
  category: string;
  price: string;
  discount: string;
  gender: string;
  priority: string;
  productNumber: string;
}

interface ProductsContextProps {
  products: Product[];
  updateProduct: (updatedProducts: Product[]) => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const initialProducts: Product[] = [];

  const [products, setProducts] = useState<Product[]>(initialProducts);

  const updateProduct = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
  };

  const contextValue: ProductsContextProps = {
    products,
    updateProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context.products;
}

export function useUpdateProduct() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useUpdateProduct must be used within a ProductsProvider');
  }
  return context.updateProduct;
}
