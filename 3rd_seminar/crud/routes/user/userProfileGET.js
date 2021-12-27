const users=require('../../dbMockup/user');
const util=require('../../lib/util');
const statusCode=require('../../constants/statusCode');
const responseMessage=require('../../constants/responseMessage');

module.exports=async(req,res)=>{
    //request params에서 데이터 가져오기(비밀번호를 제외한 User정보)
    //존재하는 id인지 확인-없다면 no user반환
    //성공-READ_PROFILE_SUCCESS와 함께 정보 반환
    const id=req.params.id;
    console.log(id);
    //request param이 잘못됐을 때
    if(!id){ //request data확인->bad request
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }
    const User=users.filter(user=>user.id===id)[0];
    res.status(200).send(util.success(statusCode.OK,responseMessage.READ_PROFILE_SUCCESS,User)); 
}