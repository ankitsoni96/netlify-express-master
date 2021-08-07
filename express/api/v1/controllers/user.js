
class userController {
    async getUsers(req,res){
        try {
            res.send({message:'Working'})
        } catch (error) {
            
        }
    }
}

module.exports = new userController()