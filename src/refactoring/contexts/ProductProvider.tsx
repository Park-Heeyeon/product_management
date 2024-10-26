import { createContext, useContext } from "react";
import { Product } from "../../types";
import useProductManagement from "../hooks/useProductManagement";

interface ProductContextType {
  openProductIds: Set<string>;
  toggleProductAccordion: (id: string) => void;
  editingProduct: Product | null;
  updateEditingProduct: (editProduct: Product | null) => void;
  showNewProductForm: boolean;
  toggleShowNewProductForm: (isShowForm: boolean) => void;
  newProduct: Omit<Product, "id">;
  updateNewProduct: (newProduct: Omit<Product, "id">) => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const productManagement = useProductManagement();

  return (
    <ProductContext.Provider value={productManagement}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
