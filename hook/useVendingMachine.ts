import { DRINK_LIST, MESSAGES, PAYMENT_METHOD } from "@/constants";
import { Drink, PaymentMethod } from "@/types";
import { getRandomNumber } from "@/util";
import { useEffect, useState } from "react";

export const useVendingMachine = () => {
  const [drinks, setDrinks] = useState<Drink[]>(DRINK_LIST);
  const [message, setMessage] = useState(MESSAGES.WELCOME);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PAYMENT_METHOD.CASH
  );
  const [balance, setBalance] = useState(0);
  const [selected, setSelected] = useState<Drink | null>(null);

  useEffect(() => {
    const drinksWithStock = DRINK_LIST.map((drink) => ({
      ...drink,
      stock: getRandomNumber(5),
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrinks(drinksWithStock);
  }, []);

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handleSelectDrink = (drinkId: number) => {
    const drink = drinks.find((d) => d.id === drinkId) || null;
    setSelected(drink);
  };

  const handleSelectAmount = (amount: number) => {
    setBalance((prev) => prev + amount);
  };

  return {
    drinks,
    message,
    paymentMethod,
    setSelected,
    handlePaymentMethodChange,
    handleSelectDrink,
    handleSelectAmount,
    balance,
  };
};
