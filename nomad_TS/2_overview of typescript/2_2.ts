// 이전 시간에 했던 것 - 기본타입
let a1: number = 1;
let a2: string = "i1";
let a3: boolean = true;

// 각 타입들의 array는 그냥 타입 선언 뒤에 []를 붙이면 된다.
let a4: boolean[] = [];

//optional type
const player1: object = {
  // 이 타입은 아무 소용이 없다.
  name: "nico",
};
// Error // player1.name을 호출했을 때 에러가 발생한다.
// player1 = object이기 때문에 object 안에는 name 이라는 요소가 없어서!
// 그래서 이렇게 object를 써주는 대신에 object의 타입을 정의해주기로 한다!
const player2: {
  name: string;
  age?: number; // age?: number | undefined;
} = {
  name: "nico",
};

// 그냥 if(player2.age < 10){} 이렇게 적으면  TS는 player2.age가 undefined일 수도 있다고 말해준다.

if (player2.age && player2.age < 10) {
  // 따라서 이렇게 적어줘서 player2.age가 있는지 확인을 거쳐야 한다.
}
// 결론 : age? 의 ?는 optional parameter(선택적 변수)를 지정해주는 방법이다.

// Alias
type Name = string;
type Age = number;
type Player = {
  name: string;
  age?: Age;
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
};

// 함수의 return 타입 지정
function playerMaker(name: string): Player {
  // 매개변수 괄호 옆에 Alias를 표기해주면 된다.
  return {
    name, // it sames name : name(객체의 키와 값이 서로 같은 이름을 가진다면 이렇게 적어도 된다.)
  };
}
const nico2 = playerMaker("nico");
nico2.age = 12;

// 화살표 함수로는
const playerMaker2 = (name: string): Player => ({ name });
const nico3 = playerMaker2("nico");
nico3.age = 12;

// 영상에서 배운 것
// 1. 선택적 타입을 다루는 법
// 2. Alisa 타입을 생성하는 법
// 3. argument의 타입을 지정하는 방법
// 4. 함수 return 값의 타입을 지정하는 방법
