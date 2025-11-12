import { DRINK_LIST, MAX_CHANGE, MESSAGES, PAYMENT_METHOD } from "@/constants";
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
  const [change, setChange] = useState<number>(0);

  // 음료 재고 및 거스름돈 설정
  useEffect(() => {
    const drinksWithStock = DRINK_LIST.map((drink) => ({
      ...drink,
      stock: getRandomNumber(5),
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrinks(drinksWithStock);
    setChange(getRandomNumber(MAX_CHANGE));
  }, []);

  // 결제 수단 선택 로직
  const handlePaymentMethodChange = (method: PaymentMethod) => {
    console.log(method);
    if (balance > 0 && method === PAYMENT_METHOD.CARD) {
      setMessage(MESSAGES.NO_SWITCH_CASH);
      return;
    }

    if (method === PAYMENT_METHOD.CARD) {
      const isSuccess = Math.random() > 0.05; // 95% 확률로 카드 인식 성공
      if (!isSuccess) {
        setMessage(MESSAGES.CARD_RECOGNITION_FAILED);
        return;
      }
      setBalance(getRandomNumber(10000));
      setPaymentMethod(PAYMENT_METHOD.CARD);
      setMessage(MESSAGES.CARD_MODE);
      return;
    }
    setPaymentMethod(PAYMENT_METHOD.CASH);
    setBalance(0);
    setMessage(MESSAGES.CASH_MODE);
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

    const newBalance = balance + amount;
    setBalance(newBalance);
    setMessage(
      `${amount}원 투입. 투입한 총 금액: ${newBalance.toLocaleString()}원`
    );
  };

  // 반환 로직
  const handleReturnChange = () => {
    if (balance === 0) {
      setMessage(MESSAGES.NO_BALANCE);
      return;
    }

    if (paymentMethod === PAYMENT_METHOD.CARD) {
      setMessage(MESSAGES.RETURN_CARD);
      setPaymentMethod(PAYMENT_METHOD.CASH);
    } else {
      setMessage(`투입금액 ${balance.toLocaleString()}원 반환`);
    }

    setBalance(0);
    setSelected(null);
  };

  // 구매 로직
  const handlePurchase = () => {
    if (!selected) {
      setMessage("음료를 선택해주세요.");
      return;
    }

    if (selected.stock === 0) {
      setMessage(MESSAGES.OUT_OF_STOCK);
      setSelected(null);
      return;
    }

    if (balance < selected.price) {
      const message =
        paymentMethod === PAYMENT_METHOD.CASH
          ? MESSAGES.INSUFFICIENT_AMOUNT
          : MESSAGES.INSUFFICIENT_CARD_BALANCE;
      setMessage(message);
      return;
    }

    const changeToReturn = balance - selected.price;
    if (paymentMethod === PAYMENT_METHOD.CASH) {
      if (changeToReturn > 0 && changeToReturn > change) {
        setMessage(MESSAGES.NO_CHANGE);
      } else if (changeToReturn > 0) {
        setChange((prev) => prev - changeToReturn);
        setMessage(
          `구매 완료. 거스름돈 ${changeToReturn.toLocaleString()}원 반환`
        );
      } else {
        setMessage(MESSAGES.PURCHASE_SUCCESS);
      }

      setBalance(0);
    }

    if (paymentMethod === PAYMENT_METHOD.CARD) {
      setBalance(changeToReturn);
      setMessage(MESSAGES.PURCHASE_SUCCESS);
    }

    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) =>
        drink.id === selected.id ? { ...drink, stock: drink.stock - 1 } : drink
      )
    );
    setSelected(null);
  };

  return {
    drinks,
    message,
    balance,
    paymentMethod,
    selected,
    setSelected,
    handlePaymentMethodChange,
    handleSelectDrink,
    handleInsertCash,
    handleReturnChange,
    handlePurchase,
  };
};
