const users=require('../../dbMockup/user');
const util=require('../../lib/util');
const statusCode=require('../../constants/statusCode');
const responseMessage=require('../../constants/responseMessage');

module.exports=async(req,res)=>{
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
}