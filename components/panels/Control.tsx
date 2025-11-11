import { FC } from "react";
import { AVAILABLE_CASH_AMOUNTS, PAYMENT_METHOD } from "@/constants";
import { PaymentMethod } from "@/types";

interface ControlProps {
  handlePaymentMethodChange: (method: PaymentMethod) => void;
}

const Control: FC<ControlProps> = ({ handlePaymentMethodChange }) => {
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
          <button key={amount} onClick={() => console.log(`${amount}원`)}>
            {amount}원
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => console.log("반환")}>반환</button>
        <button onClick={() => console.log("구매")}>구매</button>
      </div>
    </div>
  );
};

export default Control;
