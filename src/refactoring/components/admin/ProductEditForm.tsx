import { Product } from "../../../types";
import { useProductContext } from "../../contexts/ProductProvider";
import {
  updateProductName,
  updateProductPrice,
  updateProductStock,
} from "../../hooks/utils/adminUtils";
import DiscountInfoEditForm from "./DiscountInfoEditForm";

interface Props {
  products: Product[];
  product: Product;
  onProductUpdate: (newProduct: Product) => void;
}
const ProductEditForm = ({ products, product, onProductUpdate }: Props) => {
  const { editingProduct, updateEditingProduct } = useProductContext();
  const { name, price, stock } = editingProduct || {};

  const handleProductNameUpdate = (productId: string, newName: string) => {
    const updatedProduct = updateProductName(
      editingProduct,
      productId,
      newName
    );
    if (updatedProduct) {
      updateEditingProduct(updatedProduct);
    }
  };

  const handlePriceUpdate = (productId: string, newPrice: number) => {
    const updatedProduct = updateProductPrice(
      editingProduct,
      productId,
      newPrice
    );
    if (updatedProduct) {
      updateEditingProduct(updatedProduct);
    }
  };

  const handleStockUpdate = (productId: string, newStock: number) => {
    const updatedProduct = updateProductStock(
      editingProduct,
      productId,
      newStock
    );
    if (updatedProduct) {
      onProductUpdate(updatedProduct);
      updateEditingProduct(updatedProduct);
    }
  };

  const handleEditComplete = () => {
    if (editingProduct) {
      onProductUpdate(editingProduct);
      updateEditingProduct(null);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1">상품명: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleProductNameUpdate(product.id, e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">가격: </label>
        <input
          type="number"
          value={price}
          onChange={(e) =>
            handlePriceUpdate(product.id, parseInt(e.target.value))
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">재고: </label>
        <input
          type="number"
          value={stock}
          onChange={(e) =>
            handleStockUpdate(product.id, parseInt(e.target.value))
          }
          className="w-full p-2 border rounded"
        />
      </div>
      {/* 할인 정보 수정 부분 */}
      <DiscountInfoEditForm
        products={products}
        product={product}
        onProductUpdate={onProductUpdate}
      />
      <button
        onClick={handleEditComplete}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
      >
        수정 완료
      </button>
    </div>
  );
};
export default ProductEditForm;
