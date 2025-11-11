export const DRINK_LIST = [
  {
    id: 1,
    name: "콜라",
    price: 1100,
    stock: 0,
  },
  { id: 2, name: "물", price: 600, stock: 0 },
  { id: 3, name: "커피", price: 700, stock: 0 },
];

export const PAYMENT_METHOD = {
  CASH: "cash",
  CARD: "card",
} as const;

export const AVAILABLE_CASH_AMOUNTS = [100, 500, 1000, 5000, 10000];

export const MESSAGES = {
  WELCOME: "환영합니다!",
};
