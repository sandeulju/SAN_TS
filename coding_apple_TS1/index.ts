// 브라우저는 ts 파일을 읽을 수 없어서 js로 변환해 준뒤 읽게해야함.
// 터미널에 tsc -w
// tsconfig.json = ts -> js 컴파일시 옵션설정가능

// 간단한 변수 타입지정
let namee: string = "kim";
// Error - namee = 123

let nameee: string[] = ["kim", "park"]; // array
let nameeee: { name?: string } = { name: "kim" }; // object

let nameeeee: string | number = "kim"; // union type

type MyType = string | number; // Type alias - 보통 대문자로 많이 작명합니다!(일반 변수와 차별화해서 관리)
let nameName: MyType = 123;
let nameStr: MyType = "string ok";

// 함수에도 타입지정 가능
function foo(x: number): number {
  // parameter에 타입 지정 - 괄호 안에 지정
  return x * 2; // return 값 타입 지정 - parameter 옆에 지정
}
// Error foo('abc')

// array에 쓸 수 있는 tuple 타입(= array의 순서별로 type을 지정해주는 것)
type Member = [number, boolean];
let john: Member = [123, true];

// object에 타입 지정해야할 속성이 너무 많으면 = index signature
type Memberr = {
  [key: string]: string; // 의미 : "글자로 된 모든 object 속성의 타입은 : string"
};
let joe: Memberr = { name: "kim", age: "123", manyAtt: "ok" };

// class 타입지정 가능
class User {
  name: string; // 변수 설정(중괄호 내에 미리 변수를 만들어놔야 constructor 안에서 this.name 이렇게 사용가능합니다.)
  constructor(name: string) {
    this.name = name;
  }
}
