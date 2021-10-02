/*const funcName=(params)=>{
    console.log("funcName");
}
//함수를 변수에 할당
funcName(params);
*/
function add(x,y){
    return x+y;
}
console.log(add(2,3));
const add = (x, y) => {
    return x + y;
};
const add = x => {
    return x;
};
const add = () => {
    return 1;
};
const addStr=(x,y)=>{
    return x+y;
}
console.log(addStr("안녕","하세요"));

const square=x=>x*x; //매개변수가 하나, 로직이 한 줄일 때
const person=(name,age)=>({name,age});
//객체를 리턴할 때는 소괄호로 감싸줘야 함

//이벤트가 있으면 이벤트를 기다리고 없으면 바로 실행.
//background에가서 시간 지나는 거 충족
//call back큐로 가서 stack에 다른 함수들 있는지 확인. stack으로 다시 가서 실행