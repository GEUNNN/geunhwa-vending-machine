"use client";
import Item from "@/components/Item";
import Display from "@/components/panels/Display";
import Control from "@/components/panels/Control";
import { useVendingMachine } from "@/hook/useVendingMachine";

export default function Home() {
  const { message, paymentMethod, balance } = useVendingMachine();

  return (
    <div>
      <main>
        <div>
          <h1>음료 자판기</h1>

          <div>
            <Item />
          </div>

          <div>
            <Display
              message={message}
              paymentMethod={paymentMethod}
              balance={balance}
            />
            <Control />
          </div>
        </div>
      </main>
    </div>
  );
}
