let a = "hello";
a = "bye"; // 문제 없음 (string -> string)
// Error // a = 1;

let b: boolean = false;
// 우리가 type checker와 소통하는 방식

let c: boolean = true;
let d = true;
// c와 d는 같은 말이다. c보단 d를 추천함(가독성).

let e = [1, 2, 3]; // TS는 이것이 number array 라는 것을 자동으로 추론해주고 있다.
// Error // c.push("1") -> string을 number의 array에 집어넣으려고 하는 것이기 때문에 작동하지 않는다.(JS에서는 작동한다.)

let f = []; // 빈 배열일 경우 TS에게 명시적으로 어떤 요소가 들어갈건지 선언해줘야한다. (예시 : let f : number[] = [])
// 하지만 보통 명시적 표현은 최소한으로 사용하는게 더 낫다

const player = {
  name: "nico", // 이렇게만 적어도 player 안에 있는 name요소가 string임을 player 객체 위에 마우스를 올리면 알 수 있다.
};
