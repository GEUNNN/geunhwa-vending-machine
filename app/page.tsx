"use client";
import Item from "@/components/Item";
import Display from "@/components/panels/Display";
import Control from "@/components/panels/Control";
import { useVendingMachine } from "@/hook/useVendingMachine";

export default function Home() {
  const {
    drinks,
    message,
    paymentMethod,
    balance,
    handlePaymentMethodChange,
    handleSelectDrink,
    handleInsertCash,
  } = useVendingMachine();

  return (
    <div>
      <main>
        <div>
          <h1>음료 자판기</h1>

          <div>
            {drinks.map((drink) => (
              <Item
                key={drink.id}
                drink={drink}
                handleSelectDrink={handleSelectDrink}
              />
            ))}
          </div>

          <div>
            <Display
              message={message}
              paymentMethod={paymentMethod}
              balance={balance}
            />
            <Control
              handlePaymentMethodChange={handlePaymentMethodChange}
              handleSelectAmount={handleInsertCash}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
