const joi = require('joi')

class userValidator {
    async validateRegister(body){
        let schema = joi.object().keys({
            name:joi.string().required(),
            contact:joi.string().required(),
            address:joi.string().required(),
            gender:joi.string().valid('M','F').required(),
            country:joi.string().required()
        })
        let value = await schema.validate(body);
        if(value.error){
            throw value.error.details[0].message
        }else{
            return value;
        }
    }
}

module.exports = new userValidator()