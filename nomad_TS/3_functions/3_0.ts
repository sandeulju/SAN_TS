// (1)
// call signatures = 함수 위에 마우스를 올렸을 때 보게 되는 것
// call signature는 내가 함수를 어떻게 호출해야 할 지를 알려준다.

// 이게 바로 함수의 call signature 타입을 만드는 것이다.
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b; // 일일히 type이 number라고 말해줄 필요가 없다.
// 만약, const add:Add = (a,b) => {a+b} 같은 형식으로 함수의 값을 리턴하지 않게 된다면,
// 이 함수는 void를 반환하지 않는다고 말해준다.

////////// 댓글 해설 참조 //////////

// {}를 사용하면 그 값이 반환값이 함수 내부의 내용으로 처리가 됩니다.

// 밑의 예시를 보면 이해가 되실거라 생각됩니다.
// 1. const add:Add = (a,b) => a+b 를 함수로 풀면 다음과 같게 됩니다.
// function add(a, b) {
// return (a+b)
// }

// 2. const add:Add = (a,b) => {a+b} 를 함수로 풀면 다음과 같게 됩니다.
// function add(a, b) {
// a+b;
// }

// 즉 애로우함수에서 {}를 사용하게 되면 그 안의 값은 반환이 아니라
// 함수 내부 내용으로 처리되기에 반환값이 없는 void로 처리됩니다.
// 이에 따라 위에서 미리 선안한 Add자료형의 반환값은 number라고
// 정해놓은 내용과 충돌하기에 에러가 발생합니다.
