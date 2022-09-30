// https://youtu.be/xkpcNolC270

// 브라우저는 ts 파일을 읽을 수 없어서 js로 변환해 준뒤 읽게해야함.
// 터미널에 tsc -w
// tsconfig.json = ts -> js 컴파일시 옵션설정가능
// 간단한 변수 타입지정
var namee = "kim";
// Error - namee = 123
var nameee = ["kim", "park"]; // array
var nameeee = { name: "kim" }; // object
var nameeeee = "kim"; // union type
var nameName = 123;
var nameStr = "string ok";
// 함수에도 타입지정 가능
function foo(x) {
  // parameter에 타입 지정 - 괄호 안에 지정
  return x * 2; // return 값 타입 지정 - parameter 옆에 지정
}
var john = [123, true];
var joe = { name: "kim", age: "123", manyAtt: "ok" };
// class 타입지정 가능
var User = /** @class */ (function () {
  function User(name) {
    this.name = name;
  }
  return User;
})();
