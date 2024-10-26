import { Coupon, Product } from "../../types.ts";
import {
  CartItem,
  CouponSelector,
  OrderSummary,
  ProductList,
  Container,
  SectionBox,
  SubSection,
} from "../components/index.ts";

import { useCart } from "../hooks/index.ts";

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
  } = useCart();

  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } =
    calculateTotal();

  return (
    <Container title="장바구니">
      <SectionBox title="상품 목록">
        <ProductList products={products} cart={cart} addToCart={addToCart} />
      </SectionBox>

      <SectionBox title="장바구니 내역">
        <div className="space-y-2">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              cartItem={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <SubSection subTitle="쿠폰 적용">
          <CouponSelector
            coupons={coupons}
            applyCoupon={applyCoupon}
            selectedCoupon={selectedCoupon}
          />
        </SubSection>

        <SubSection subTitle="주문 요약">
          <OrderSummary
            totalBeforeDiscount={totalBeforeDiscount}
            totalDiscount={totalDiscount}
            totalAfterDiscount={totalAfterDiscount}
          />
        </SubSection>
      </SectionBox>
    </Container>
  );
};
