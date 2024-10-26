import { useState } from "react";
import { Product } from "../../types";

const useProductManagement = () => {
  const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showNewProductForm, setShowNewProductForm] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    stock: 0,
    discounts: [],
  });

  const toggleProductAccordion = (productId: string) => {
    const toggleProductState = (
      openProductIds: Set<string>,
      productId: string
    ): Set<string> => {
      const updatedSet = new Set(openProductIds);
      updatedSet.has(productId)
        ? updatedSet.delete(productId)
        : updatedSet.add(productId);
      return updatedSet;
    };

    setOpenProductIds((prev) => toggleProductState(prev, productId));
  };

  const updateEditingProduct = (product: Product | null) => {
    setEditingProduct(product);
  };

  const toggleShowNewProductForm = (isShowForm: boolean) => {
    setShowNewProductForm(isShowForm);
  };

  const updateNewProduct = (updatedProduct: Omit<Product, "id">) => {
    setNewProduct((prev) => ({
      ...prev,
      ...updatedProduct,
    }));
  };

  return {
    openProductIds,
    toggleProductAccordion,
    editingProduct,
    updateEditingProduct,
    showNewProductForm,
    toggleShowNewProductForm,
    newProduct,
    updateNewProduct,
  };
};
export default useProductManagement;
