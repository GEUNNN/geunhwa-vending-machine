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

export const CHANGE_AMOUNTS = [100, 500, 1000];

export const MAX_CHANGE = 25000;

export const MESSAGES = {
  CASH_MODE: "현금 결제 모드입니다.",
  CARD_MODE: "카드 결제 모드입니다.",
  CARD_RECOGNITION_FAILED: "카드 인식에 실패했습니다. 다시 시도해주세요.",
  INSUFFICIENT_CARD_BALANCE: "카드 잔액이 부족합니다.",
  INSUFFICIENT_AMOUNT: "투입 금액이 부족합니다.",
  NO_SWITCH_CASH: "현금 투입 중엔 불가합니다. 먼저 반환해주세요.",
  NO_BALANCE: "반환할 잔액이 없습니다.",
  NO_CHANGE: "거스름돈이 없습니다. 관리자에게 문의하세요.",
  OUT_OF_STOCK: "선택하신 음료는 품절입니다.",
  PURCHASE_SUCCESS: "구매가 완료되었습니다. 감사합니다!",
  RETURN_CARD: "카드 인식을 취소합니다.",
  WELCOME: "환영합니다!",
};
