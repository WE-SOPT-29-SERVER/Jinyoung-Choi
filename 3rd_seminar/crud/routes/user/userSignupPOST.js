const users=require('../../dbMockup/user');
const util=require('../../lib/util');
const statusCode=require('../../constants/statusCode');
const responseMessage=require('../../constants/responseMessage');

module.exports=async(req,res)=>{
    const {name,password,email}=req.body;
    //request body가 잘못됐을 때
    if(!name||!password||!email){ //request data확인->네 개 중 하나라도 없으면 bad request
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }//해당 email을 가진 user가 하나 이상
    const alreadyUser=users.filter(user=>user.email===email).length>0;
    if(alreadyUser){//이미 있는 USER면
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST,responseMessage.ALREADY_EMAIL));
    }
    const newUser={id:users.length+1,name,password,email};
    users.push(newUser);
    res.status(200).send(util.success(statusCode.OK,responseMessage.CREATED_USER,newUser)); 
}