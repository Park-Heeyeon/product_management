import { CouponProvider } from "../contexts/CouponProvider.tsx";
import { ProductProvider } from "../contexts/ProductProvider.tsx";
import { DiscountProvider } from "../contexts/DiscountProvider.tsx";
import {
  Container,
  ProductManagement,
  CouponManagement,
} from "../components/index.ts";
import { Coupon, Product } from "../../types.ts";

interface Props {
  products: Product[];
  coupons: Coupon[];
  onProductAdd: (newProduct: Product) => void;
  onCouponAdd: (newCoupon: Coupon) => void;
  onProductUpdate: (newProduct: Product) => void;
}

export const AdminPage = ({
  products,
  coupons,
  onProductAdd,
  onCouponAdd,
  onProductUpdate,
}: Props) => {
  return (
    <ProductProvider>
      <DiscountProvider>
        <CouponProvider>
          <Container title="관리자 페이지">
            <ProductManagement
              products={products}
              onProductAdd={onProductAdd}
              onProductUpdate={onProductUpdate}
            />
            <CouponManagement coupons={coupons} onCouponAdd={onCouponAdd} />
          </Container>
        </CouponProvider>
      </DiscountProvider>
    </ProductProvider>
  );
};
