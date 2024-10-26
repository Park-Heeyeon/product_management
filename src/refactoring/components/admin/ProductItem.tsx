import { Product } from "../../../types";
import { useProductContext } from "../../contexts/ProductProvider";
import DiscountInfo from "./DiscountInfo";
import ProductEditForm from "./ProductEditForm";

interface Props {
  products: Product[];
  product: Product;
  index: number;
  onProductUpdate: (newProduct: Product) => void;
}
const ProductItem = ({ products, product, index, onProductUpdate }: Props) => {
  const { toggleProductAccordion, openProductIds, editingProduct } =
    useProductContext();
  const { id, name, price, stock } = product || {};
  return (
    <div
      className="bg-white p-4 rounded shadow"
      data-testid={`product-${index + 1}`}
    >
      <button
        data-testid="toggle-button"
        onClick={() => toggleProductAccordion(id)}
        className="w-full text-left font-semibold"
      >
        {name} - {price}원 (재고: {stock})
      </button>
      {openProductIds.has(product.id) && (
        <div className="mt-2">
          {editingProduct && editingProduct.id === id ? (
            <ProductEditForm
              products={products}
              product={product}
              onProductUpdate={onProductUpdate}
            />
          ) : (
            <DiscountInfo product={product} />
          )}
        </div>
      )}
    </div>
  );
};
export default ProductItem;
