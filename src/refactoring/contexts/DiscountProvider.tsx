import { createContext, useContext } from "react";
import { Discount } from "../../types";
import useDiscountManagement from "../hooks/useDiscountManagement";

interface DiscountContextType {
  newDiscount: Discount;
  updateNewDiscount: (newDiscount: Discount) => void;
}

const DiscountContext = createContext<DiscountContextType | null>(null);

export const DiscountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const discountManagement = useDiscountManagement();

  return (
    <DiscountContext.Provider value={discountManagement}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscountContext = () => {
  const context = useContext(DiscountContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
