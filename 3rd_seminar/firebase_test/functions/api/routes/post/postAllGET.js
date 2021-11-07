const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
//id,title,content
module.exports = async (req, res) => {
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_POST_SUCCESS,posts));
}