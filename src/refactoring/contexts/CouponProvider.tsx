import { Coupon } from "../../types";
import useCouponManagement from "../hooks/useCouponManagement";
import { createContext, useContext } from "react";

interface CouponContextType {
  newCoupon: Coupon;
  updateNewCoupon: (newCoupon: Coupon) => void;
}

const CouponContext = createContext<CouponContextType | null>(null);

export const CouponProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const couponManagement = useCouponManagement();

  return (
    <CouponContext.Provider value={couponManagement}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCouponContext = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
