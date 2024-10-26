import { useState } from "react";
import { Product } from "../../types.ts";

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState(initialProducts);

  // 제품 업데이트 함수
  const updateProduct = (updateProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updateProduct.id ? updateProduct : p))
    );
  };

  // 새로운 제품 추가 함수
  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return {
    products,
    updateProduct,
    addProduct,
  };
};
