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
    selected,
    handlePaymentMethodChange,
    handleSelectDrink,
    handleInsertCash,
    handleReturnChange,
    handlePurchase,
  } = useVendingMachine();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <main className="w-full max-w-4xl">
        <div className="rounded-xl border bg-white p-6 shadow-2xl">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            음료 자판기
          </h1>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-200 p-4 shadow-inner md:w-2/3 sm:grid-cols-3">
              {drinks.map((drink) => (
                <Item
                  key={drink.id}
                  drink={drink}
                  isSelected={selected?.id === drink.id}
                  handleSelectDrink={handleSelectDrink}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 md:w-1/3">
              <Display
                message={message}
                paymentMethod={paymentMethod}
                balance={balance}
              />
              <Control
                paymentMethod={paymentMethod}
                handlePaymentMethodChange={handlePaymentMethodChange}
                handleSelectAmount={handleInsertCash}
                handleReturnChange={handleReturnChange}
                handlePurchase={handlePurchase}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
