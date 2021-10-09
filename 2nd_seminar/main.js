const sum=require('./sum');
const cal=require('./calculator');
const result=sum(1,3);
console.log("sum result: ",result);

console.log("add result: ",cal.add(1,3));
console.log("subtract result: ",cal.subtract(1,3));
console.log("mul result: ",cal.multiply(1,3));
console.log("div result: ",cal.divide(1,3));