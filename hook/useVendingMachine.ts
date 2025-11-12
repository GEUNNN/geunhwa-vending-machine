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

  // 결제 수단 선택 로직
  const handlePaymentMethodChange = (method: PaymentMethod) => {
    console.log(method);
    if (balance > 0 && method === PAYMENT_METHOD.CARD) {
      setMessage("현금 투입 중엔 불가합니다. 먼저 반환해주세요.");
      return;
    }
    setPaymentMethod(method);
  };

  // 음료 선택 로직
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

  // 현금 투입 로직
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

  // 반환 로직
  const handleReturnChange = () => {
    if (balance === 0) {
      setMessage(MESSAGES.NO_BALANCE);
      return;
    }

    setMessage(`투입금액 ${balance.toLocaleString()}원 반환`);
    setBalance(0);
    setSelected(null);
  };

  return {
    drinks,
    message,
    paymentMethod,
    setSelected,
    handlePaymentMethodChange,
    handleSelectDrink,
    handleInsertCash,
    handleReturnChange,
    balance,
  };
};
