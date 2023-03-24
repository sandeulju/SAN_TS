let a = "hello"; // a의 타입이 추론됨(string)
a = "bye"; // 문제 X
// a = 1 // error (str -> num)

let b: boolean = true;
let c: number[] = [];

//명시적 표현은 최소화하는게 좋다.

let a1: number[] = [1, 2];
let b1: string[] = ["1", "2"];
let c1: boolean[] = [true, false];
// 이렇게 적지 말고 ts가 추론하게 하는게 더 좋음

// 객체의 타입 지정

// 안좋은 예
const player1: object = {
  name: "nico",
};

// 좋은 예
const player2: {
  name: string;
  age?: number; // optional parameter(선택적 변수)를 지정하는 방법
} = {
  name: "nico",
};

if (player2.age && player2.age < 10) {
  // && 연산자로 보호장치 설정
}

// Alias (시작은 대문자로) - 자주 사용 추천
type Age = number;
type Player = {
  name: string;
  age?: Age;
};

const player3: Player = {
  name: "nico",
};

// 함수의 return 값의 타입을 지정하는 법
function playerMaker(name: string): Player {
  // : Player 로써 Player 타입의 값을 리턴할 것이라고 알려줌
  return {
    name: name, // 더 짧게 하기 = name
  };
}

// 화살표 함수 버전
const playerMaker2 = (name: string): Player => ({ name });
const nico = playerMaker2("nico");
nico.age = 12;

// Types of TS Part Two
// readonly
// tuple
// undefined , null, any

// Types of TS Part Three
// unknown (어떤 타입인지 모르는 변수) - any랑 다르게 TS의 보호를 받음.
// void (아무것도 리턴하지 않는 함수)
// never (함수가 절대 return 하지 않을 때, 타입이 두 가지일 수도 있는 상황에 사용)

// 함수가 절대 return 하지 않을 때(ex> Error)
function hello(): never {
  throw new Error("xxx");
}

// 타입이 두 가지일 수도 있는 상황에 사용
function hello1(name: string | number) {
  if (typeof name === "string") {
    // typeof로 타입가드 설정 - 이 범위 내에서 name은 string
  } else if (typeof name === "number") {
    // typeof로 타입가드 설정 - 이 범위 내에서 name은 number
  } else {
    name; // 여기서 name은 never - 이 코드는 절대 실행되지 않아야 한다는 의미
  }
}

// #3 Call Signatures
// call signature는 함수 위에 마우스를 올렸을 때 보게 되는 것(함수의 call signature)
// 함수를 어떻게 호출해야 하는지랑 반환 타입을 알려줌
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// #3.1 Overloading
// Overloading = 여러개의 Call Signature를 가진 함수
type Add1 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add1: Add1 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// Next.js에서 일어날 수 있는 Case 예시
// 오버로딩의 사용 예시 - 패키지나 라이브러리를 디자인할 때 이런 식으로 많이 사용함
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

// push를 구현
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// 오버로딩 사용 예시2 - Call Signature의 인자 수들이 다른 경우
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add2(1, 2);
add2(1, 2, 3);

// #3.2 다형성(polymorphism)
// concrete 타입 = 우리가 전부터 봐왔던 타입(string, number, boolean, void, unknown...)
type SuperPrint = {
  (arr: number[]): void;
};

type SuperPrint1 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint1 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3]);
superPrint(["a", "b", "c"]);
superPrint([true, false, true]);

// generic = 타입의 placeholder 같은 것
// Call signature를 작성할 때, 여기 들어올 확실한 타입을 모를 때 generic을 사용함.

type SuperPrint2 = <T>(a: T[]) => T;
const superPrint2: SuperPrint2 = (a) => a[0];
function superPrint3<V>(a: V[]) {
  return a[0];
}

const a2 = superPrint([1, 2, 3]);
const b2 = superPrint(["a", "b", "c"]);
const c2 = superPrint([true, false, true]);

// #3.4 Conclusions
type Player3<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player3<NicoExtra>;
// type LynnPlayer = Player3<null>;

const nico2: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

// const lynn: LynnPlayer = {
//   name: "lynn",
//   extraInfo: null,
// };

const lynn: Player3<null> = {
  name: "lynn",
  extraInfo: null,
};

// #4.0 Classes
class Player4 {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const nico4 = new Player4("nico", "las", "니꼬");
// nico4.firstName - 접근 불가
// class를 생성할 때 private, public 옵션을 사용할 수 있다.

// 추상 클래스(Abstract Class) : 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스
// 추상 클래스는 직접 새로운 인스턴스를 만들 수 없다.
// 추상 클래스는 다른 곳에서 상속받을 수만 있는 클래스이다.

abstract class User {
  constructor(
    // 접근 제어자(어떠한 보호 등급인지) / 이름 / 타입
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player5 extends User {}
const nico5 = new Player5("nico", "las", "니꼬");
// nico5.getFullName(); - private시 작동 X
// private 및 public 이 property 뿐만 아니라 method에서도 작동함

// 추상 메서드 : 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드
// 추상 메서드를 가지고 있는 추상 클래스를 상속받은 클래스가 추상 메서드를 구현하지 않으면 Error
// 추상 클래스 내에서 추상 메서드를 구현하지 않는다. - Call Signature만 작성
// 만약 property를 private로 만든다면, 그 클래스를 상속하였을지라도 그 property에 접근할 수 없다.
// private - class(User)의 인스턴스나 메서드에서 접근할 수 있으나, User는 추상 클래스여서 인스턴스화 할 수 없음
// field가 외부로부터는 보호되지만, 다른 자식 클래스에서 사용되길 원한다면 private 사용 X - 대신 protected 사용

//#4.1 Recap
type Words = {
  [key: string]: string; // object property의 이름은 모르지만 타입만을 알 때 이렇게 작성
  // Words 타입이 string 만을 property로 가지는 오브젝트라는 걸 말해줌
  // (제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법)
};

// let dict: Words = {
//   1: "Food",
// };

class Dict {
  private words: Words;
  constructor() {
    this.words = {}; // 수동으로 초기화 : constructor 내에서 words를 선언하지 않았으므로 이렇게 수동으로 초기화 하여야 에러가 안남
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");

//#4.2 Interfaces
// 값을 보여주고는 싶지만 수정을 불가능하게 하고 싶다? => property를 readonly로 만들어주면 됨 - public 일지라도 내용 수정이 불가능
// readonly는 자바스크립트에선 보이지 않는다
class Word2 {
  constructor(public readonly term: string, public readonly def: string) {}
  static hello() {
    // static은 js에서 보임
    return "hello";
  }
}

const kimchi1 = new Word2("kimchi", "한국의 음식");
// kimchi1.def="xxx" - Error
Word2.hello();

// Interface는 type과 2가지 차이점이 존재함.

// type Player6 = {
//   nickname: string;
//   healthBar: number;
// };

interface Player6 {
  nickname: string;
  healthBar: number;
}

const nico3: Player6 = {
  nickname: "nico",
  healthBar: 10,
};

// type 응용
type Team = "red" | "blue" | "yellow";

type Player7 = {
  nickname: string;
  team: Team;
};

// interface의 용도 : 오브젝트의 모양을 특정해 줌
// 다른 점 : type 키워드가 interface 키워드에 비해 활용할 수 있는 게 많음
// type 키워드가 할 수 있는 것 : 오브젝트의 모양 정해주기, 특정 값들로 제한, 타입 alias 만들기

// interface는 클래스와 닮았다.
interface User1 {
  name: string;
}

interface Player8 extends User1 {
  // User와 같은 속성을 공유하는데 다시 적어주기 귀찮으면 상속받으면 된다
}

// 같은걸 type으로 적었을 때
type User2 = {
  name: string;
};
type Player9 = User2 & {};

const nico8: Player8 = {
  name: "nico",
};

const nico9: Player9 = {
  name: "nico",
};

// 같은 이름으로 interface를 여러번 선언해도 자동으로 합쳐준다(프로퍼티의 이름이 다를 때)
interface User3 {
  name: string;
}
interface User3 {
  lastName: string;
}
interface User3 {
  health: number;
}

const nicco: User3 = {
  name: "nicco",
  lastName: "las",
  health: 10,
};

// #4.3 Interfaces part two

// 추상 클래스는 다른 클래스가 가져야 할 property랑 메소드를 명시할 수 있도록 도와준다.

abstract class User4 {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

// (다시) 추상 클래스는 이걸(추상 클래스를) 상속받는 다른 클래스가 가질 property와 메소드를 지정해줌

class Player10 extends User4 {
  fullName() {
    // protected는 추상 클래스로부터 상속받은 클래스들이 property에 접근하도록 해줌
    // private를 썼다면 Player10이 firstName, lastName에 접근할 수 없음
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 추상 클래스와 같은 기능을 하는 interface -> 코드를 가볍게 해준다.
interface User5 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

// extend 대신 implements - extend는 js에 있어서 js로 컴파일 됨 / implements는 js에 없어서 컴파일 되지 않음 => 코드가 가벼워짐
class Player11 implements User5 {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 인터페이스를 상속하는 것의 문제점 - private property 들을 사용하지 못함
