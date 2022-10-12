// overloading (function overloading || method overloading 이라고도 부른다.)
type Add2 = (a: number, b: number) => number; // Add2는 Call Signature이다.
// 보기처럼 정의해 놓은건 call signature를 만드는 가장 간단한 단축키에 가깝다.
const add2: Add2 = (a, b) => a + b;

type Add3 = {
  // 이렇게도 call signature를 만들 수 있다.(앞선 것 보다는 길게 작성하는 방법)
  (a: number, b: number): number;
};
// 이런 방법이 있는 이유는 overloading 때문이다.
// overloading은 함수가 (서로 다른) 여러개의 call signature를 가지고 있을 때 발생시킨다.

type Add4 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
// const add4: Add4 = (a, b) => a + b;
// Error // Operator '+' cannot be applied to types 'number' and 'string | number'. -> "b" 때문에!!
// 따라서, 해결책!
const add4: Add4 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// overloading은 여러 call signatures가 있는 함수일 뿐이다.
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

// overloading - 다른 여러개의 argument를 가지고 있을 때 발생하는 효과
// 좋은 overloading 예시
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// 하나의 call signature는 두개의 파라미터를 가지고, 다른 하나는 6개의 파라미터를 가지는 경우가 발생할 수도 있다.
// 이전 예시 = 다른 call signature를 가지지만 같은 갯수의 파라미터.
// 현재 예시 = 다른 call signature에 다른 갯수의 파라미터.

type Add5 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// Error // const add5 : Add5 = (a,b,c) => {return a + b}
// Answer
const add5: Add5 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
// 파라미터의 갯수가 다른 경우에는 마지막에 적힌 추가 파라미터를 옵션처럼 취급한다.
