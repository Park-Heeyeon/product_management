import { Product } from "../../../types";
import ProductItem from "./ProductItem";

interface Props {
  products: Product[];
  onProductUpdate: (newProduct: Product) => void;
}
const TotalProductList = ({ products, onProductUpdate }: Props) => {
  return (
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
  );
};
export default TotalProductList;
