import { Drink } from "@/types";
import clsx from "clsx";
import { FC } from "react";

interface ItemProps {
  drink: Drink;
  isSelected: boolean;
  handleSelectDrink: (drinkId: number) => void;
}

const Item: FC<ItemProps> = ({ drink, isSelected, handleSelectDrink }) => {
  const isSoldOut = drink.stock === 0;

  return (
    <button
      onClick={() => handleSelectDrink(drink.id)}
      className={clsx(
        "flex min-h-[120px] flex-col items-center justify-between rounded-lg border-2 p-3 transition-all",
        isSoldOut
          ? "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
          : "bg-white hover:border-blue-500 hover:shadow-md",
        isSelected &&
          !isSoldOut &&
          "border-blue-600 bg-blue-50 ring-2 ring-blue-300"
      )}
    >
      <span className="font-bold text-gray-800">{drink.name}</span>
      <span className="text-sm text-gray-700">
        {drink.price.toLocaleString()}원
      </span>
      <span
        className={clsx(
          "text-xs font-medium",
          isSoldOut ? "text-gray-500" : "text-gray-600"
        )}
      >
        {isSoldOut ? "매진" : `${drink.stock}개 남음`}
      </span>
    </button>
  );
};

export default Item;
