import { Product } from "../../../types";
import { useDiscountContext } from "../../contexts/DiscountProvider";
import { useProductContext } from "../../contexts/ProductProvider";
import {
  removeDiscountFromProduct,
  addDiscountToProduct,
  findProductById,
} from "../../hooks/utils/adminUtils";

interface Props {
  products: Product[];
  product: Product;
  onProductUpdate: (newProduct: Product) => void;
}

const DiscountInfoEditForm = ({
  products,
  product,
  onProductUpdate,
}: Props) => {
  const { editingProduct, updateEditingProduct } = useProductContext();
  const { newDiscount, updateNewDiscount } = useDiscountContext();

  const handleRemoveDiscount = (productId: string, index: number) => {
    const updatedProduct = findProductById(products, productId);
    if (updatedProduct) {
      const newProduct = removeDiscountFromProduct(updatedProduct, index);
      onProductUpdate(newProduct);
      updateEditingProduct(newProduct);
    }
  };

  const handleAddDiscount = (productId: string) => {
    const updatedProduct = findProductById(products, productId);
    if (updatedProduct && editingProduct) {
      const newProduct = addDiscountToProduct(updatedProduct, newDiscount);
      onProductUpdate(newProduct);
      updateEditingProduct(newProduct);
      updateNewDiscount({ quantity: 0, rate: 0 });
    }
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
      {editingProduct?.discounts.map((discount, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>
            {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
          </span>
          <button
            onClick={() => handleRemoveDiscount(product.id, index)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      ))}
      <div className="flex space-x-2">
        <input
          type="number"
          placeholder="수량"
          value={newDiscount.quantity}
          onChange={(e) =>
            updateNewDiscount({
              ...newDiscount,
              quantity: parseInt(e.target.value) || 0, // 기본값 설정
            })
          }
          className="w-1/3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="할인율 (%)"
          value={newDiscount.rate * 100}
          onChange={(e) =>
            updateNewDiscount({
              ...newDiscount,
              rate: (parseInt(e.target.value) || 0) / 100, // 기본값 설정
            })
          }
          className="w-1/3 p-2 border rounded"
        />
        <button
          onClick={() => handleAddDiscount(product.id)}
          className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={newDiscount.quantity <= 0 || newDiscount.rate < 0} // 유효성 검사
        >
          할인 추가
        </button>
      </div>
    </div>
  );
};
export default DiscountInfoEditForm;
