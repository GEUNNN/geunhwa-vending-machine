import { FC } from "react";
import { PaymentMethod } from "@/types";

interface DisplayProps {
  paymentMethod: PaymentMethod;
  balance: number;
}

const Display: FC<DisplayProps> = ({ paymentMethod, balance }) => {
  return (
    <div>
      <span>결제 수단: {paymentMethod === "card" ? "카드" : "현금"}</span>
      <span>잔액: {balance}원</span>
    </div>
  );
};

export default Display;
