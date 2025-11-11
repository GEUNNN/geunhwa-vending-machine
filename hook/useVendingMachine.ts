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
    const drink = drinks.find((d) => d.id === drinkId);
    if (!drink) return;

    if (drink.stock === 0) {
      setMessage(MESSAGES.OUT_OF_STOCK);
      setSelected(null);
      return;
    }

    setSelected(drink);
    setMessage(`${drink.name} 선택. 가격: ${drink.price.toLocaleString()}원`);
  };

  const handleInsertCash = (amount: number) => {
    if (paymentMethod !== PAYMENT_METHOD.CASH) {
      setMessage(MESSAGES.CARD_MODE);
      return;
    }

    setBalance((prev) => prev + amount);
    setMessage(
      `${amount}원 투입. 투입한 총 금액: ${(
        balance + amount
      ).toLocaleString()}원`
    );
  };

  return {
    drinks,
    message,
    paymentMethod,
    setSelected,
    handlePaymentMethodChange,
    handleSelectDrink,
    handleInsertCash,
    balance,
  };
};
