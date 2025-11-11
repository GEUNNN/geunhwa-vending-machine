import { PaymentMethod } from "@/types";
import { useState } from "react";

export const useVendingMachine = () => {
  const [message, setMessage] = useState("환영합니다!");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [balance, setBalance] = useState(0);

  return {
    message,
    paymentMethod,
    setPaymentMethod,
    balance,
  };
};
