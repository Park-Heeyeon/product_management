# product_management

## 프로젝트 개요
이 프로젝트는 Vite, React, TypeScript, 및 pnpm을 사용하여 구현된 쇼핑몰 장바구니 및 관리자 페이지입니다. 장바구니 페이지는 사용자가 상품을 선택하고, 수량을 조정하며, 쿠폰을 적용해 최종 결제 금액을 확인할 수 있는 기능을 제공합니다. 관리자 페이지에서는 상품, 할인, 및 쿠폰 관리를 통해 쇼핑몰 운영을 할 수 있도록 지원합니다.

## 기술 스택
- **Frontend**: React, TypeScript
- **State Management**: React Context API
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Testing**: Jest

## 주요 기능

### 1. 장바구니 페이지
장바구니 페이지는 사용자 친화적인 쇼핑 경험을 제공하며 다음과 같은 기능을 지원합니다.

- **상품 목록**
  - 각 상품에 대해 상품명, 가격, 재고 수량, 및 할인 정보를 표시합니다.
  - 재고가 없는 상품의 경우 “품절”로 표시되어 장바구니 추가가 불가능합니다.

- **장바구니**
  - 장바구니에 담긴 상품의 수량을 조절할 수 있으며, 각 상품의 이름, 가격, 수량, 그리고 적용된 할인율을 확인할 수 있습니다.
  - 할인율이 적용된 상품은 예시로 "10% 할인 적용"과 같이 표시됩니다.
  - 장바구니 내 모든 상품의 총액이 실시간으로 계산됩니다.

- **쿠폰 할인**
  - 사용자가 쿠폰을 선택하고 적용할 수 있으며, 최종 결제 금액에 쿠폰 할인이 반영됩니다.

- **주문 요약**
  - 할인 전 총 금액, 총 할인 금액, 그리고 최종 결제 금액을 보여줍니다.

![장바구니페이지](https://github.com/user-attachments/assets/b33789c9-c3a4-4493-98d5-0e3a9ee78a70)

### 2. 관리자 페이지
관리자 페이지에서는 상품, 할인, 쿠폰을 손쉽게 관리할 수 있습니다.

- **상품 관리**
  - 각 상품의 정보를 수정할 수 있으며(상품명, 가격, 재고 수량, 할인율), 새로운 상품을 추가하거나 기존 상품을 제거할 수 있습니다.

- **할인 관리**
  - 상품별 할인 정보를 추가, 수정, 삭제할 수 있으며, 구매 수량에 따른 할인율을 설정할 수 있습니다.

- **쿠폰 관리**
  - 모든 상품에 적용 가능한 쿠폰을 생성할 수 있으며, 쿠폰의 이름, 코드, 할인 유형(금액 또는 비율), 할인 값을 설정할 수 있습니다.

![관리자페이지](https://github.com/user-attachments/assets/6e61da0f-1826-4e72-bfef-71dfd4943942)


## Jest를 이용한 테스트

이 프로젝트는 **Jest**를 사용하여 주요 기능들에 대한 단위 및 통합 테스트를 수행합니다.

### 테스트 항목

1. **장바구니 페이지**
   - **상품 목록**
     - 상품명, 가격, 재고 수량, 할인 정보가 올바르게 표시되는지 확인합니다.
     - 품절된 상품에 대해 "품절" 표시가 나타나며, 장바구니 추가가 불가능한지 확인합니다.
   - **장바구니 기능**
     - 장바구니에 추가된 상품의 수량 조절이 정상적으로 이루어지는지 테스트합니다.
     - 각 상품의 이름, 가격, 수량, 할인율이 올바르게 표시되는지 확인합니다.
     - 장바구니 내 모든 상품의 총액 계산이 정확한지 테스트합니다.
   - **쿠폰 할인**
     - 쿠폰이 적용되었을 때 최종 결제 금액에 할인이 반영되는지 확인합니다.
   - **주문 요약**
     - 할인 전 총 금액, 총 할인 금액, 최종 결제 금액이 정확하게 계산되고 표시되는지 확인합니다.

2. **관리자 페이지**
   - **상품 관리**
     - 상품 정보 수정, 새로운 상품 추가, 상품 삭제 기능이 정상적으로 동작하는지 테스트합니다.
   - **할인 관리**
     - 할인 정보 추가, 수정, 삭제가 정확히 이루어지며, 할인 조건이 올바르게 설정되는지 확인합니다.
   - **쿠폰 관리**
     - 쿠폰 생성 및 삭제가 정상적으로 이루어지는지, 쿠폰 이름, 코드, 할인 유형(금액 또는 비율), 할인 값이 올바르게 입력되고 반영되는지 확인합니다.

<img width="407" alt="스크린샷 2024-10-27 오후 10 35 46" src="https://github.com/user-attachments/assets/c4466475-f6be-47c3-96a3-86cbf0446c7f"> <img width="462" alt="스크린샷 2024-10-27 오후 10 36 05" src="https://github.com/user-attachments/assets/c30e7c14-f130-44ee-85e8-54ea0f3eabc8">

