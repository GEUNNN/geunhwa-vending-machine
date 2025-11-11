import { Drink } from "@/types";
import { FC } from "react";

interface ItemProps {
  drink: Drink;
  handleSelectDrink: (drinkId: number) => void;
}

const Item: FC<ItemProps> = ({ drink, handleSelectDrink }) => {
  const isSoldOut = drink.stock === 0;

  return (
    <div>
      <span>{drink.name}</span>
      <span>{drink.price.toLocaleString()}원</span>
      <button onClick={() => handleSelectDrink(drink.id)}>
        {isSoldOut ? "매진" : `${drink.stock}개 남음`}
      </button>
    </div>
  );
};

export default Item;
