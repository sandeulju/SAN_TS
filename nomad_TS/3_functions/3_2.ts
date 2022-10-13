// 다형성(polymorphism) - 여러가지 다른 구조들

type SuperPrint = {
  // 만약 타입 상관없이 배열을 받고 배열안의 모든 요소를 console.log로 출력해주는 함수를 작성한다면?
  (arr: number[]): void;
  (arr: string[]): void;
  (arr: boolean[]): void;
  (arr: (number | boolean)[]): void;
  // 이처럼 모든 유형의 경우의 수를 생각해 call signature를 작성해주어야 할 것이다.
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

// concrete type = number, boolean, string, void, unknown ...
// Generic type
// generic = 타입의 placeholder 같은 것임. concrete 타입을 대신해서 쓸 수 있음
// 타입스크립트로 placeholder를 작성하고, 그게 뭔지 추론해서 함수를 사용할 수 있다.
// Generic을 사용하는 이유 : call signature를 작성할 때, 들어올 확실한 타입을 모를 때 사용한다.
// generic을 사용해서 타입스크립트가 타입을 유추하게 한다.

// 사용법
type SuperPrint2 = {
  <Generic>(arr: Generic[]): void;
};

// 많이 보게 될 형태
type SuperPrint3 = {
  <T>(arr: T[]): T;
};
// generic을 사용하면서 타입스크립트에게 타입을 유추하도록 알려주고,
// 그 타입의 배열이 될 거라는걸 인지하고, 그 타입중 하나를 리턴하도록 한다.
