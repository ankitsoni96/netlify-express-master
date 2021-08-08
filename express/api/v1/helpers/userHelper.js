const db = require('../../utils/db')
class userHelper {
    register(body){
        return db.insertOne('users',body)
    }
}

module.exports = new userHelper()