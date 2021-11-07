const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
//id,title,content
module.exports = async (req, res) => {
    const {id}=req.params;
    if (!id) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    
    const post=posts.filter((obj)=>obj.id==id)[0]; //[0]반드시 적어야함
    if (!post) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.READ_POST_FAIL));
    else { //삭제~
        const newPosts=posts.filter(post=>post.id!=id);
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_DELETE_SUCCESS,newPosts));
    }
}