import { Coupon } from "../../../types";
import { SectionBox, SubSection, NewCouponForm, CouponList } from "../index";

interface Props {
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
}

const CouponManagement = ({ coupons, onCouponAdd }: Props) => {
  return (
    <SectionBox title="쿠폰 관리">
      <SubSection>
        <NewCouponForm onCouponAdd={onCouponAdd} />
        <CouponList coupons={coupons} />
      </SubSection>
    </SectionBox>
  );
};
export default CouponManagement;
