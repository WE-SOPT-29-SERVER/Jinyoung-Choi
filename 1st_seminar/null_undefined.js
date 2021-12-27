console.log(typeof 1);
console.log(typeof "str");
console.log(typeof true);
console.log(typeof null); //object로 출력 bug
console.log(typeof undefined);

//null == undefined 시 true
//truthy는 0이 아닌 정수,{},[] 빈 '객체'와 빈 문자열 , falsy는 0, null, undefined, '' 빈 문자열
//1 == true 비교시 truthy. 대충 true
//어떤 값이든지 Boolean으로 type casting가능