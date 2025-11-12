import { FC } from "react";
import { AVAILABLE_CASH_AMOUNTS, PAYMENT_METHOD } from "@/constants";
import { PaymentMethod } from "@/types";

interface ControlProps {
  handlePaymentMethodChange: (method: PaymentMethod) => void;
  handleSelectAmount: (amount: number) => void;
  handleReturnChange: () => void;
  handlePurchase: () => void;
}

const Control: FC<ControlProps> = ({
  handlePaymentMethodChange,
  handleSelectAmount,
  handleReturnChange,
  handlePurchase,
}) => {
  return (
    <div>
      <div>
        <button onClick={() => handlePaymentMethodChange(PAYMENT_METHOD.CASH)}>
          현금
        </button>
        <button onClick={() => handlePaymentMethodChange(PAYMENT_METHOD.CARD)}>
          카드
        </button>
      </div>
      <div>
        {AVAILABLE_CASH_AMOUNTS.map((amount) => (
          <button key={amount} onClick={() => handleSelectAmount(amount)}>
            {amount}원
          </button>
        ))}
      </div>
      <div>
        <button onClick={handleReturnChange}>반환</button>
        <button onClick={handlePurchase}>구매</button>
      </div>
    </div>
  );
};

export default Control;
