interface Props {
  totalBeforeDiscount: number;
  totalDiscount: number;
  totalAfterDiscount: number;
}

const OrderSummary = ({
  totalBeforeDiscount,
  totalDiscount,
  totalAfterDiscount,
}: Props) => {
  const convertLocaleString = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <div className="space-y-1">
      <p>상품 금액: {convertLocaleString(totalBeforeDiscount)}원</p>
      <p className="text-green-600">
        할인 금액: {convertLocaleString(totalDiscount)}원
      </p>
      <p className="text-xl font-bold">
        최종 결제 금액: {convertLocaleString(totalAfterDiscount)}원
      </p>
    </div>
  );
};

export default OrderSummary;
