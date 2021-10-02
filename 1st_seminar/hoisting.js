hoistFunction(); //함수까지 올려준다

function hoistFunction(){
    console.log(x); //선언만을 끌어올려서 undefined 출력. 할당은 별개
    var x='var'; //선언과 할당
    console.log(x);
}
function colorFunction(){
    if(true){
        var color='blue'; //if block바깥에서 할당한 것과 똑같음
        console.log(color);
    }
    console.log(color);
}
colorFunction();
//console.log(color); //var color는 함수 내 변수