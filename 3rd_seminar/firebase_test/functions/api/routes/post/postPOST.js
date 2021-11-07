const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
//id,title,content
module.exports = async (req, res) => {
    const {content}=req.body;
    if (!content) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    else {
        const newPost={id:posts.length+1,content:content};
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_POST_SUCCESS,newPost));
    }
}