if(true){
    var x='var';
}//var는 func scope이기 때문에 if block이랑 상관x
console.log(`var: ${x}`);

if(true){
    let y='let';
}//let,const는 block scope이기 때문에 밖에 못 나감
console.log(`let: ${y}`);