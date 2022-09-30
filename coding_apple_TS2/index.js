var title = document.querySelector("#title");
// Error!! title.innerHTML = '반가워요' -> title이 union type(Element|null)이라서
// (selector로 찾은 요소는 항상 union type임)
// => 타입을 하나로 narrowing 해주면 됩니다.
// narrowing 예시
if (title !== null) {
    title.innerHTML = "반가워요";
}
// HTML 조작시 narrowing 방법 5개
// 2. instanceof 연산자 (가장 많이 쓰게될 것임)
if (title instanceof Element) {
    // if (A(자식) instanceof B(부모)) [A는 B에 속해있습니까? 느낌]
    // 맞으면 true, 아니면 false 반환
    title.innerHTML = "반가워요";
}
// 3. as로 사기치기(자주 쓰는것 비추)
var titleAs = document.querySelector("#title"); // 왼쪽에 있는 요소를 Element type으로 간주해주세요~
// [단점] 만약 document.querySelector("#title123") 처럼 잘못 입력해도 null이 아니라 무조건 Element로 간주함.
titleAs.innerHTML = "반가워요";
// 4. 오브젝트에 붙이는 ?.(optional chaining 문법)
// optional chaining => 1. 제목에 innerHTML이 있으면 출력해주고 / 2. 없으면 undefined 뱉으셈
var titleOption = document.querySelector("#title");
if ((titleOption === null || titleOption === void 0 ? void 0 : titleOption.innerHTML) != undefined) {
    titleOption.innerHTML = "반가워요";
}
// 5. strict 모드 끄기
// json에서 strictNullChecks를 false로 바꾸기 or strictNullChecks 지우기 -> narrowing 없이 HTML을 수정할 수 있음
// a태그의 href 속성내용을 바꿔보자
var link = document.querySelector(".link");
// link.href = "https://kakao.com"; => Error!!! (union 타입이기 때문에)
// if (link instanceof Element) {
//   link.href="https://kakao.com" => Error!!! (a태그의 경우 a태그에 필요한 정확한 타입명이 존재함(HTMLAnchorElement))
// }
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
// TS에서 eventListener 부착하는 법
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    // ?. 으로 narrowing 하여 이벤트리스너 부착
});
