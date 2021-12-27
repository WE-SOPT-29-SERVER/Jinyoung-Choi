let arr=[2,'some string',undefined];
let arr2=Array(null,4,{part:'server',age:26});

arr.push('something');
arr[2]='another';
console.log(arr);
console.log(typeof arr)

console.log("Arr 기본 함수들을 알아보자");
let arr3=[1,2,3,4];
console.log(`arr3의 길이: ${arr.length}`);
arr3.push("new item");
console.log("arr3 push: ",arr3);

arr3.shift(); //첫 번째 원소 뺌
console.log("arr shift:",arr3);

arr3.unshift("first item"); //첫 번째 자리에 first item 끼워넣음
console.log("arr3 unshift:",arr3);

console.log("arr3.include(4):",arr3.includes(4)); //포함 true
console.log("arr3.include(1000):",arr3.includes(1000)); //false

//배열+배열 : concat
//string넣어서 원소 잇기 : join
//reverse, filter: callback받아서 조건 걸어서 결과 반환
//map 해당 원소들 대상으로 새 배열 반환
//reduce는 해당 원소들 대상으로 return 값 하나 반환

//let item in serverPart ->idx 리턴
//let item of serverPart ->원소 리턴