import { Discount, Product } from "../../../types";

export const findProductById = (products: Product[], productId: string) => {
  return products.find((product) => product.id === productId);
};

export const updateProductName = (
  editingProduct: Product | null,
  productId: string,
  newName: string
) => {
  return editingProduct?.id === productId
    ? { ...editingProduct, name: newName }
    : undefined;
};

export const updateProductPrice = (
  editingProduct: Product | null,
  productId: string,
  newPrice: number
) => {
  return editingProduct?.id === productId
    ? { ...editingProduct, price: newPrice }
    : undefined;
};

export const updateProductStock = (
  editingProduct: Product | null,
  productId: string,
  newStock: number
) => {
  return editingProduct?.id === productId
    ? { ...editingProduct, stock: newStock }
    : undefined;
};

/**
 * 제품에 할인 추가하는 함수
 * @param product - 업데이트할 제품
 * @param newDiscount - 추가할 할인
 * @returns - 업데이트된 제품 또는 undefined
 */
export const addDiscountToProduct = (
  product: Product,
  newDiscount: Discount
) => {
  return {
    ...product,
    discounts: [...product.discounts, newDiscount],
  };
};

/**
 * 제품에서 특정 인덱스의 할인 제거하는 함수
 * @param product - 업데이트할 제품
 * @param index - 제거할 할인 인덱스
 * @returns - 업데이트된 제품 또는 undefined
 */
export const removeDiscountFromProduct = (product: Product, index: number) => {
  return {
    ...product,
    discounts: product.discounts.filter((_, i) => i !== index),
  };
};
