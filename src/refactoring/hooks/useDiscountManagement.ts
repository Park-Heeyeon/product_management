import { useState } from "react";
import { Discount } from "../../types";

const useDiscountManagement = () => {
  const [newDiscount, setNewDiscount] = useState<Discount>({
    quantity: 0,
    rate: 0,
  });
  const updateNewDiscount = (newDiscount: Discount) => {
    setNewDiscount((prev) => ({ ...prev, ...newDiscount }));
  };
  return {
    newDiscount,
    updateNewDiscount,
  };
};
export default useDiscountManagement;
