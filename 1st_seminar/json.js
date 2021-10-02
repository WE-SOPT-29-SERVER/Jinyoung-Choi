const sopt={
    name:"WE SOPT",
    slogan:"우리가 SOPT입니다",
    part:["plan","design","android","iOS","server","web"],
    number:180,
    printName:function(){
        console.log("name: ",this.name);
    },
    printNum:function(){
        console.log("number:",this.number);
    },
};
console.log("typeof sopt:",typeof sopt);
console.log("sopt:"+sopt);
console.log("sopt:",sopt);
console.log("sopt:"+JSON.stringify(sopt));

sopt.printName();
sopt.number=190;
sopt.printNum();

const dogs=[
    {name:"식빵",family:"웰시코기",age:1,weight:2.14},
    {name:"콩콩",family:"포메",age:3,weight:2.5},
    {name:"두팔",family:"푸들",age:7,weight:3.1},
]
console.log("dogs1:",dogs); //[안의 string으로 내용 보여짐]
console.log("dogs2:"+dogs); //[안의 object형식]
console.log("dogs3:"+JSON.stringify(dogs)); //한 줄로 예쁘게~

dogs.forEach(dog=>
    console.log(
        dog.name+
        "이는 종이 "+
        dog.family+
        "이고, 나이가 ",
        dog.age+"세입니다 ~",
    ),
);