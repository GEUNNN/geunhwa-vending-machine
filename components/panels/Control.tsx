import { FC } from "react";
import { AVAILABLE_CASH_AMOUNTS, PAYMENT_METHOD } from "@/constants";
import { PaymentMethod } from "@/types";
import clsx from "clsx";

interface ControlProps {
  paymentMethod: PaymentMethod;
  handlePaymentMethodChange: (method: PaymentMethod) => void;
  handleSelectAmount: (amount: number) => void;
  handleReturnChange: () => void;
  handlePurchase: () => void;
}

const Control: FC<ControlProps> = ({
  paymentMethod,
  handlePaymentMethodChange,
  handleSelectAmount,
  handleReturnChange,
  handlePurchase,
}) => {
  const isCashDisabled = paymentMethod === PAYMENT_METHOD.CARD;

  const getPaymentButtonClass = (method: PaymentMethod) =>
    clsx(
      "w-full rounded py-2 font-semibold transition-colors",
      paymentMethod === method
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    );

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-4 shadow-md">
      <div className="grid grid-cols-2 gap-2">
        <button
          className={getPaymentButtonClass(PAYMENT_METHOD.CASH)}
          onClick={() => handlePaymentMethodChange(PAYMENT_METHOD.CASH)}
        >
          현금
        </button>
        <button
          className={getPaymentButtonClass(PAYMENT_METHOD.CARD)}
          onClick={() => handlePaymentMethodChange(PAYMENT_METHOD.CARD)}
        >
          카드
        </button>
      </div>
      <div className="rounded border bg-white p-3">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          현금
        </label>
        <div className="grid grid-cols-3 gap-2">
          {AVAILABLE_CASH_AMOUNTS.map((amount) => (
            <button
              key={amount}
              onClick={() => handleSelectAmount(amount)}
              disabled={isCashDisabled}
              className={clsx(
                "rounded bg-gray-100 p-2 text-sm transition-colors",
                !isCashDisabled && "hover:bg-gray-200",
                isCashDisabled && "cursor-not-allowed opacity-50"
              )}
            >
              {amount}c
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleReturnChange}
          className="rounded-lg bg-red-600 py-3 font-bold text-white transition-colors hover:bg-red-700"
        >
          반환
        </button>
        <button
          onClick={handlePurchase}
          className="rounded-lg bg-green-600 py-3 font-bold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-300 disabled:opacity-50"
        >
          구매
        </button>
      </div>
    </div>
  );
};

export default Control;
