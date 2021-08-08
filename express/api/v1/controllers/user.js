const userValidator = require('../validators/userValidator')
const userHelper = require('../helpers/userHelper')
class userController {
    async register(req,res){
        try {
            await userValidator.validateRegister(req.body);
            await userHelper.register(req.body);
            res.send({code:1,status:200,message:"Success"})
        } catch (error) {
            res.send({code:0,status:200,message:error})
            
        }
    }
}

module.exports = new userController()