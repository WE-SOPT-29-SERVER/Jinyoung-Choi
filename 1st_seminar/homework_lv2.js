const team=[
    {
        name:"최진영",
        residence:"효창공원앞역",
        age:22,
        hobby:"산책",
    },
    {
        name:"이정은",
        residence:"숙대입구역",
        age:23,
        hobby:"콘솔 게임",
    },
    {
        name:"이승헌",
        residence:"광흥창역",
        age:23,
        hobby:"콘솔 게임",
    },
    {
        name:"남지윤",
        residence:"공덕역",
        age:22,
        hobby:"서든어택",
    },
];

function introduce(arr){
    let idx=0;
    for (let person of arr){
        idx++;
        console.log(`${idx}번째 팀원의 이름은 ${person.name}, 사는 곳은 ${person.residence}, 취미는 ${person.hobby}, 나이는 ${person.age}살입니다!`);
    }
}
introduce(team);