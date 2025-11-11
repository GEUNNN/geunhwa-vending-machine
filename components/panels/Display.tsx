import { FC } from "react";
import { PaymentMethod } from "@/types";

interface DisplayProps {
  message: string;
  paymentMethod: PaymentMethod;
  balance: number;
}

const Display: FC<DisplayProps> = ({ message, paymentMethod, balance }) => {
  return (
    <div>
      <p>{message}</p>
      <span>결제 수단: {paymentMethod === "card" ? "카드" : "현금"}</span>
      <span>투입 금액: {balance}원</span>
    </div>
  );
};

export default Display;
