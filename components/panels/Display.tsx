import { FC } from "react";
import { PaymentMethod } from "@/types";

interface DisplayProps {
  message: string;
  paymentMethod: PaymentMethod;
  balance: number;
}

const Display: FC<DisplayProps> = ({ message, paymentMethod, balance }) => {
  return (
    <div className="rounded-lg bg-gray-900 p-4 font-mono shadow-inner">
      <p className="min-h-12 break-keep text-lg font-bold text-green-400">
        {message}
      </p>
      <div className="mt-2 flex justify-between border-t border-gray-700 pt-2 text-sm text-yellow-400">
        <span>결제: {paymentMethod === "card" ? "카드" : "현금"}</span>
        <span>금액: {balance.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default Display;
