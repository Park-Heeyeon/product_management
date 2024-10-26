import { CartItem, Coupon, Product } from "../../../types";

export const findToCartItem = (cart: CartItem[], productId: string) => {
  return cart.find((item) => item.product.id === productId);
};

// 남은 재고 계산
export const getRemainingStock = (
  cart: CartItem[],
  product: Product
): number => {
  const cartItem = findToCartItem(cart, product.id);
  return product.stock - (cartItem?.quantity || 0);
};

// 적용된 할인율 반환
export const getAppliedDiscount = (item: CartItem): number => {
  const { discounts } = item.product;
  const { quantity } = item;
  const appliedDiscount = discounts.reduce((total, discount) => {
    return quantity >= discount.quantity
      ? Math.max(total, discount.rate)
      : total;
  }, 0);
  return appliedDiscount;
};

// 최대 할인율 반환
export const getMaxDiscount = (
  discounts: { quantity: number; rate: number }[]
): number => {
  return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
};

// 장바구니 수량 업데이트
export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] => {
  const existingItem = findToCartItem(cart, productId);

  if (!existingItem) return cart;

  const adjustQuantity = (maxQuantity: number, prevCartItem: CartItem) => {
    const updatedQuantity = Math.max(0, Math.min(newQuantity, maxQuantity));

    return updatedQuantity > 0
      ? { ...prevCartItem, quantity: updatedQuantity }
      : null;
  };

  return cart
    .map((item) =>
      item.product.id === existingItem.product.id
        ? adjustQuantity(existingItem.product.stock, existingItem)
        : item
    )
    .filter((item): item is CartItem => item !== null);
};

// 개별 항목의 총액 계산 및 최대 할인율 적용
export const calculateItemTotal = (item: CartItem) => {
  const { price } = item.product;
  const { quantity } = item;

  const totalPrice = price * quantity;
  const discount = getMaxApplicableDiscount(item);

  return totalPrice * (1 - discount);
};

// 각 항목에 적용 가능한 최대 할인율 계산
export const getMaxApplicableDiscount = (item: CartItem) => {
  const { discounts } = item.product;
  const { quantity } = item;

  // 항목 수량에 맞는 최대 할인율 계산
  return discounts.reduce((maxDiscount, discount) => {
    return quantity >= discount.quantity && discount.rate > maxDiscount
      ? discount.rate
      : maxDiscount;
  }, 0);
};

// 장바구니 전체의 총액 및 할인액 계산
export const calculateCartTotal = (
  cart: CartItem[],
  selectedCoupon: Coupon | null
) => {
  // 장바구니의 총액을 계산하는 함수
  const calculateCartTotals = () =>
    cart.reduce(
      (totals, item) => {
        const { price } = item.product;
        const { quantity } = item;

        // 개별 항목의 총 가격
        const itemTotalPrice = price * quantity;

        // 할인이 적용된 최종 가격
        const itemTotalAfterDiscount = calculateItemTotal(item);

        totals.totalBeforeDiscount += itemTotalPrice;
        totals.totalAfterDiscount += itemTotalAfterDiscount;

        return totals;
      },
      { totalBeforeDiscount: 0, totalAfterDiscount: 0 }
    );

  // 쿠폰 적용
  const applyCoupon = (totalAfterDiscount: number) => {
    if (!selectedCoupon) return totalAfterDiscount; // 쿠폰이 없을 경우 그대로 반환

    // 금액 할인
    return selectedCoupon.discountType === "amount"
      ? Math.max(0, totalAfterDiscount - selectedCoupon.discountValue)
      : // 퍼센트 할인
        totalAfterDiscount * (1 - selectedCoupon.discountValue / 100);
  };

  // 장바구니 총액 계산
  const { totalBeforeDiscount, totalAfterDiscount } = calculateCartTotals();

  // 총 할인액 계산
  const totalDiscount = totalBeforeDiscount - applyCoupon(totalAfterDiscount);

  return {
    totalBeforeDiscount: Math.round(totalBeforeDiscount),
    totalAfterDiscount: Math.round(applyCoupon(totalAfterDiscount)),
    totalDiscount: Math.round(totalDiscount),
  };
};
