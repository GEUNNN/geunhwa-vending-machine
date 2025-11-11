import { FC } from "react";

const Control: FC = () => {
  return (
    <div>
      <div>
        <button onClick={() => console.log("현금")}>현금</button>
        <button onClick={() => console.log("카드")}>카드</button>
      </div>
      <div>
        {[100, 500, 1000, 5000, 10000].map((amount) => (
          <button key={amount} onClick={() => console.log(`${amount}원`)}>
            {amount}원
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => console.log("반환")}>반환</button>
        <button onClick={() => console.log("구매")}>구매</button>
      </div>
    </div>
  );
};

export default Control;
