var express = require('express');
const router=express.Router();
const users=require('../dbMockup/user');
const util=require('../lib/util');
const statusCode=require('../constants/statusCode');
const responseMessage=require('../constants/responseMessage');

router.post('/signup',(req,res)=>{
    const {id,name,password,email}=req.body;
    //request body가 잘못됐을 때
    if(!id||!name||!password||!email){ //request data확인->네 개 중 하나라도 없으면 bad request
        return res.status(400).send(util.fail(400,"BAD REQUEST"))
    }//해당 email을 가진 user가 하나 이상
    const alreadyUser=users.filter(user=>user.email===email).length>0;
    if(alreadyUser){//이미 있는 USER면
        return res.status(400).send(util.fail(409,"ALREADY EMAIL"));
    }
    const newUser={id:users.length+1,name,password,email};
    users.push(newUser);
    res.status(200).send(util.success(200,"회원가입 성공",newUser)); 
});

router.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){ //request body err
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE),
        ); //**!!err처리할 때는 ''return'' res를 통해 함수를 끝내줘야 함!!!!!!!! */
    }

    const user=users.filter(user=>user.email===email)[0];
    if(!user){ //존재하지 않는 USER
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER),
        );
    }

    if(user.password!=password){//잘못된 pw
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW),
        );
    }
    res.status(statusCode.OK).send(//login success와 비번 제외한 user 정보 반환
        util.success(statusCode.OK,responseMessage.LOGIN_SUCCESS,{
            user:{
                id:user.id,
                email:user.email,
                name:user.name,
            },
        }),
    );
});
module.exports=router;