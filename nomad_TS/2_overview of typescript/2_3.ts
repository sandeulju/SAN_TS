type Age2 = number;
type Name2 = string;
type Player3 = {
  // (1-1) Type에 readonly 속성을 추가할 수도 있다. (JS는 기본적으로 이런 동작이 없다)
  readonly name: Name2;
  // (1-2) TS에 readonly라고 설정해줘서, 아래에서 name을 수정하려고 하면 오류가 발생한다.
  age?: Age2;
};

const playerMaker3 = (name: string): Player3 => ({ name });
const nico4 = playerMaker3("nico4");
nico4.age = 12;
// (1-3) Error // nico4.name = "dsd";

// (1-4) readonly가 다른데에 적용된 예시(배열)
const numbers: readonly number[] = [1, 2, 3, 4];
// Error // numbers.push(5) - property 'push' does not exist on type
// (push라는 것이 readonly 타입에 존재하지 않는다.)

// (1-5) readonly가 다른데에 적용된 예시(string)
const names: readonly string[] = ["1", "2"];
// names.filter(), names.map()은 잘 작동함(filter나 map은 array를 바꾸지 않기 때문)
// 그러나 names.push()는 작동하지 않는다.

// (2-1) Tuple
// Tuple은 array를 생성할 수 있게 하는데, 최소한의 길이를 가져야 하고 특정 위치에 특정 타입이 있어야 함.
const Player4: readonly [string, number, boolean] = ["nico", 1, true];
// Player4에 선언해준 Tuple은 TS에게 이 array가 최소 3개의 아이템을 가지고,
// 이 아이템들이 string, number, boolean 순서여야 한다고 알려줌.
// Tuple과 readonly는 같이 쓸 수 있다.

// (3-1) 자바스크립트 또한 가지고 있는 타입들
let a5: undefined = undefined;
let a6: null = null;
// 가끔 우리는 선택적 타입(optional type)을 사용하는데, 선택적 타입은 undefined가 될 수도 있다.
type Player5 = {
  age?: number; // age? : number | undefined -> ?는 일종의 단축어이다.(number or undefined를 ?로)
};

// (4-1) any
let a7 = []; // 이렇게 해주면 TS는 기본적으로 a7를 any의 array라고 생각한다.
// any는 TS로부터 빠져나오고 싶을 때 쓰는 타입이다.(TS의 모든 보호장치를 비활성화 시킨다.)

// 배운 것
// 1. readonly
// 2. Tuple(readonly Tuple)
// 3. any
