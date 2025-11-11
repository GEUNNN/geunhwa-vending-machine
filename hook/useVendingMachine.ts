import { MESSAGES, PAYMENT_METHOD } from "@/constants";
import { PaymentMethod } from "@/types";
import { useState } from "react";

export const useVendingMachine = () => {
  const [message, setMessage] = useState(MESSAGES.WELCOME);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PAYMENT_METHOD.CASH
  );
  const [balance, setBalance] = useState(0);

  return {
    message,
    paymentMethod,
    setPaymentMethod,
    balance,
  };
};
