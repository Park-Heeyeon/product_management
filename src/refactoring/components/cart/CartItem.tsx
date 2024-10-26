import { CartItem as CartItemType } from "../../../types";
import { getAppliedDiscount } from "../../hooks/utils/cartUtils";

interface Props {
  cartItem: CartItemType;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeFromCart: (id: string) => void;
}

const CartItem = ({ cartItem, updateQuantity, removeFromCart }: Props) => {
  const {
    product: { id, name, price },
    quantity,
  } = cartItem;

  const appliedDiscount = getAppliedDiscount(cartItem);
  const discountMessage =
    appliedDiscount > 0
      ? `(${(appliedDiscount * 100).toFixed(0)}% 할인 적용)`
      : null;

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
      <div>
        <span className="font-semibold">{name}</span>
        <br />
        <span className="text-sm text-gray-600">
          {price}원 x {quantity}
          {discountMessage && (
            <span className="text-green-600 ml-1">{discountMessage}</span>
          )}
        </span>
      </div>
      <div>
        <button
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
          onClick={() => updateQuantity(id, quantity - 1)}
        >
          -
        </button>

        <button
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
          onClick={() => updateQuantity(id, quantity + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          onClick={() => removeFromCart(id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};
export default CartItem;
