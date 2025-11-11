"use client";
import Item from "@/components/Item";
import Display from "@/components/panels/Display";
import Control from "@/components/panels/Control";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>음료 자판기</h1>

          <div>
            <Item />
          </div>

          <div>
            <Display />
            <Control />
          </div>
        </div>
      </main>
    </div>
  );
}
