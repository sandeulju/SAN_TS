// TS에서 제일 중요한건 Type Checker와 소통하는 것이다.

let a8: unknown; // (1-1) 어떤 타입인지 모르는 변수에서 사용
// ex> API로부터 응답을 받는데, 그 응답이 어떤 타입인지 모르면 unknown 이라는 타입을 쓸 수 있다.
// unknown - 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야만 한다.
// 만약 let b = a8 + 1 이라고 하면 TS는 이를 허용해 주지 않는다.(a8의 타입이 unknown 이라서)
if (typeof a8 === "number") {
  let b = a8 + 1; // 이러면 허용(이 스코프 안에서 a8은 number이기 때문)
}
if (typeof a8 === "string") {
  let b = a8.toUpperCase();
}

// (2-1) void
function hello() {
  // 단순히 이 상태에서 hello 함수 위에 마우스를 올리면 hello 라는 함수가 void라는 것을 볼 수 있다.
  // void는 아무것도 return 하지 않는 함수를 말한다.
  // 그리고 보통 void를 따로 지정해줄 필요는 없다.
  console.log("x");
}
// (2-2) void Error
// const a9 = hello();
// a9.toUpperCase -> 허용되지 않는다.(void 타입엔 toUpperCase가 없어서.)

// (3-1) never 타입 : 함수가 절대 return 하지 않을 때 발생한다.
function hihi(): never {
  throw new Error("xxx");
} // return 하지 않고 오류를 발생시키는 함수

function hihello(name: string | number) {
  if (typeof name === "string") {
    name; // name = string
  } else if (typeof name === "number") {
    name; // name = number
  } else {
    name; // name = never
  }
}
