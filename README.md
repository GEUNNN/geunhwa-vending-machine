# 자판기 구현 과제

## 실행 방법

1. 해당 프로젝트를 clone한 후 프로젝트 폴더로 이동
2. 프로젝트에 필요한 패키지(의존성) 설치

```bash
npm install
# 또는
yarn install
```

3. 개발 서버를 실행

```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 `http://localhost:3000` 주소 입력 후 결과물 확인

## 사용된 버전

- React: 19.2.0
- Typescript: ^5
- Next.js: 16.0.1
- TailwindCSS: ^4

## 작업 중 참고한 리소스 및 도구

- 순서도
  - [순서도 파악](https://blog.naver.com/ycpiglet/222113989214)
  - [기본 기호 참고](https://wscode.tistory.com/98)
- 자판기 파악
  - [배경지식](https://namu.wiki/w/%EC%9E%90%EB%8F%99%ED%8C%90%EB%A7%A4%EA%B8%B0)
  - 동작 방식: vending machine operation process 로 검색
- AI
  - 도식에 대한 설명을 통해 순서도 파악
  - 아래 4가지 예외 상황 이외에 추가 케이스 확인 후 거스름돈 부족 케이스 추가
    1. 재고 없음
    2. 자판기에 넣은 현금이 제품 가격보다 낮음
    3. 카드 인식 안됨
    4. 카드 잔액 부족
    5. 거스름돈 부족 (해당 케이스 추가)
  - 스타일링 구현

## 폴더 구조

```bash
vending-machine/
├── app/
│ ├── page.tsx # 메인 자판기 UI 페이지
│ ├── layout.tsx
│ └── globals.css
├── components/
│ ├── Item.tsx # 개별 음료 아이템 UI
│ └── panels/
│ ├── Control.tsx # 버튼 제어 UI
│ └── Display.tsx # 디스플레이 UI
├── constants/
│ └── index.ts # 상수값
├── hooks/
│ └── useVendingMachine.ts # 자판기 로직 및 상태
├── types/
│ └── index.ts # 타입
├── util/
│ └── index.ts # 헬퍼 함수
├── public/
│ └── ...
├── package.json
└── tsconfig.json
```
