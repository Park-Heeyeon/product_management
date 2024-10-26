import { useState } from "react";
import { Coupon } from "../../types";

const useCouponManagement = () => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: "",
    code: "",
    discountType: "percentage",
    discountValue: 0,
  });

  const updateNewCoupon = (newCoupon: Coupon) => {
    setNewCoupon((prev) => ({ ...prev, ...newCoupon }));
  };

  return {
    newCoupon,
    updateNewCoupon,
  };
};
export default useCouponManagement;
