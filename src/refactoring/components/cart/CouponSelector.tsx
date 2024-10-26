import { Coupon } from "../../../types";

interface SelectorProps {
  coupons: Coupon[];
  applyCoupon: (coupon: Coupon) => void;
  selectedCoupon: Coupon | null;
}
// 쿠폰 선택과 적용된 쿠폰의 메시지를 표시하는 컴포넌트
const CouponSelector = ({
  coupons,
  applyCoupon,
  selectedCoupon,
}: SelectorProps) => {
  return (
    <div>
      <CouponSelectOptions coupons={coupons} applyCoupon={applyCoupon} />
      {selectedCoupon && <SelectedCouponMsg selectedCoupon={selectedCoupon} />}
    </div>
  );
};

interface CouponSelectOptionsProps {
  coupons: Coupon[];
  applyCoupon: (coupon: Coupon) => void;
}
// 쿠폰을 선택할 수 있는 드롭다운
const CouponSelectOptions = ({
  coupons,
  applyCoupon,
}: CouponSelectOptionsProps) => {
  return (
    <select
      onChange={(e) => applyCoupon(coupons[parseInt(e.target.value)])}
      className="w-full p-2 border rounded mb-2"
    >
      <option value="">쿠폰 선택</option>
      {coupons.map((coupon, index) => {
        const { code, name, discountType, discountValue } = coupon;
        return (
          <option key={code} value={index}>
            {name} -{" "}
            {discountType === "amount"
              ? `${discountValue}원`
              : `${discountValue}%`}
          </option>
        );
      })}
    </select>
  );
};

interface SelectedCouponProps {
  selectedCoupon: Coupon;
}
// 선택된 쿠폰의 정보를 텍스트로 표시
const SelectedCouponMsg = ({ selectedCoupon }: SelectedCouponProps) => {
  const { name, discountType, discountValue } = selectedCoupon;
  return (
    <p className="text-green-600">
      적용된 쿠폰: {name}(
      {discountType === "amount" ? `${discountValue}원` : `${discountValue}%`}{" "}
      할인)
    </p>
  );
};

export default CouponSelector;
