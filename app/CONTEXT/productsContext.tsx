import React, { createContext, useContext, ReactNode } from 'react';

type Product = [
  string, // Picture
  string, // Name
  string, // Category
  string, // Price
  string, // Discount
  string, // Gender
  string, // Priority
  string, // Product Number
];

interface ProductsContextProps {
  products: Product[];
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const products: Product[] = [
    ['/model/KMODEL (1).png', 'White Shirt', 'Shirt', '125', 'DISCOUNT0', 'kids','PRIORITYF','PN001'],
    ['/model/KMODEL (2).png', 'White Jacket', 'Jacket', '145', 'DISCOUNT0', 'kids','PRIORITYF','PN002'],
    ['/model/KMODEL (3).png', 'Gray Shirt', 'Shirt', '90', 'DISCOUNT0', 'kids','PRIORITYF','PN003'],
    ['/model/KMODEL (4).png', 'Cotton Sweater', 'Sweater', '95', 'DISCOUNT0', 'kids','PRIORITYF','PN004'],
    ['/model/KMODEL (5).png', 'Black Cotton Hat', 'Hat', '15', 'DISCOUNT0', 'kids','PRIORITYF','PN005'],
    ['/model/KMODEL (6).png', 'Woven Cotton Hoodie ', 'Hoodie', '55', 'DISCOUNT0', 'kids','PRIORITYF','PN006'],
    ['/model/KMODEL (7).png', 'Dark Grey Hoodie', 'Hoodie', '40', 'DISCOUNT0', 'kids','slide1','PN007'],
    ['/model/FMODEL (1).png', 'White Sweat Shirt', 'Shirt', '65', 'DISCOUNT0', 'female','PRIORITYF','PN008'],
    ['/model/FMODEL (2).png', 'Black Sweat Shirt', 'Shirt', '80', 'DISCOUNT0', 'female','discount1','PN009'],
    ['/model/FMODEL (3).png', 'Red Long Sleeve Shirt', 'Shirt', '70', 'DISCOUNT0', 'female','slide2','PN010'],
    ['/model/FMODEL (4).png', 'Black Hoodie', 'Hoodie', '75', 'DISCOUNT0', 'female','PRIORITYF','PN011'],
    ['/model/FMODEL (5).png', 'Cotton Scarf', 'Scarf', '30', 'DISCOUNT0', 'female','PRIORITYF','PN012'],
    ['/model/FMODEL (6).png', 'Black Hat', 'Hat', '28', 'DISCOUNT0', 'female','PRIORITYF','PN013'],
    ['/model/FMODEL (7).png', 'Black n White Sweater', 'Sweater', '75', 'DISCOUNT0', 'female','PRIORITYF','PN014'],
    ['/MODEL6.PNG', 'Black Jacket', 'Jacket', '72', 'DISCOUNT0', 'female','main','PN015'],
    ['/model/MMODEL (1).png', 'Black Sweat Shirt', 'Shirt', '55', 'DISCOUNT0', 'male','PRIORITYF','PN016'],
    ['/model/MMODEL (2).png', 'Black Hat', 'Hat', '26', 'DISCOUNT0', 'male','PRIORITYF','PN017'],
    ['/model/MMODEL (3).png', 'Light Gray Jacket', 'Jacket', '150', 'DISCOUNT0', 'male','PRIORITYF','PN018'],
    ['/model/MMODEL (4).png', 'Dark Gray Jacket', 'Jacket', '145', 'DISCOUNT0', 'male','PRIORITYF','PN019'],
    ['/model/MMODEL (5).png', 'Gray Cotton Hoodie', 'Hoodie', '130', 'DISCOUNT0', 'male','slide3','PN020'],
    ['/model/MMODEL (6).png', 'Flex Push Bomber', 'Shirt', '190', 'DISCOUNT0', 'male','discount3','PN021'],
    ['/model/MMODEL (7).png', 'White Jacket', 'Jacket', '75', 'DISCOUNT0', 'male','discount2','PN022']
  ];

  const contextValue: ProductsContextProps = {
    products,
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
