const util={
    success:(status,message,data)=>{ //매개변수 세 개를 받는 함수
        return {
            status,
            success:true,
            message,
            data,
        };
    },
    fail:(status,message)=>{
        return {
            status,
            success:false,
            message,
        };
    },
};

module.exports=util;