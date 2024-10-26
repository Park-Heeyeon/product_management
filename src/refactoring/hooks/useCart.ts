// useCart.ts
import { useState } from "react";
import { CartItem, Coupon, Product } from "../../types";
import {
  calculateCartTotal,
  findToCartItem,
  getRemainingStock,
  updateCartItemQuantity,
} from "./utils/cartUtils";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  // 장바구니 아이템 추가
  const addToCart = (product: Product) => {
    const remainingStock = getRemainingStock(cart, product);

    if (remainingStock <= 0) return;

    const updateItemQuantity = (prevCart: CartItem[], product: Product) => {
      return prevCart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
          : item
      );
    };

    const updateCart = (prevCart: CartItem[], product: Product) => {
      const existingItem = findToCartItem(prevCart, product.id);
      return existingItem
        ? updateItemQuantity(prevCart, product)
        : [...prevCart, { product, quantity: 1 }];
    };

    setCart((prevCart) => updateCart(prevCart, product));
  };

  // 장바구니 아이템 제거
  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  // 제품 수량 업데이트
  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart((prevCart) =>
      updateCartItemQuantity(prevCart, productId, newQuantity)
    );
  };

  // 쿠폰 적용
  const applyCoupon = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
  };

  // 합계 계산
  const calculateTotal = () => {
    return calculateCartTotal(cart, selectedCoupon);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
  };
};
