import { Product } from "../../../types";
import { useProductContext } from "../../contexts/ProductProvider";
import SectionBox from "../layout/SectionBox";
import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";

interface Props {
  products: Product[];
  onProductAdd: (newProduct: Product) => void;
  onProductUpdate: (newProduct: Product) => void;
}
const ProductManagement = ({
  products,
  onProductAdd,
  onProductUpdate,
}: Props) => {
  const { showNewProductForm, toggleShowNewProductForm } = useProductContext();
  return (
    <SectionBox title="상품 관리">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
        onClick={() => toggleShowNewProductForm(!showNewProductForm)}
      >
        {showNewProductForm ? "취소" : "새 상품 추가"}
      </button>
      {showNewProductForm && <NewProductForm onProductAdd={onProductAdd} />}
      <div className="space-y-2">
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            index={index}
            products={products}
            product={product}
            onProductUpdate={onProductUpdate}
          />
        ))}
      </div>
    </SectionBox>
  );
};
export default ProductManagement;
