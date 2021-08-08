// const MongoClient = require("mongodb").MongoClient;
// const MONGODB_URI = 'mongodb+srv://mongo:root@cluster0.xopxo.mongodb.net/test';
// const DB_NAME = 'login-system';
// let cachedDb = null;

const mongo = require("mongodb").MongoClient;
const objectID = require("mongodb").ObjectID;
const promise = require("bluebird");
let _db;
var env = require('dotenv').config()


const MONGODB_URI = process.env.MONGODB_URI;

class DB {
    getMongoObjectId(id) {
        return new objectID(id);
      }

      connect() {
        return new promise((resolve, reject) => {
          mongo
            .connect(MONGODB_URI, { useNewUrlParser: true })
            .then((db) => {
              _db = db.db('login-system');
              console.log("DB connected");
              resolve(db);
            })
            .catch((error) => {
              console.log(error);
              reject({ code: 0, message: "DB_ERROR" });
            });
        });
      }

      insertOne(table, data) {
        return new promise((resolve, reject) => {
            _db.collection(table).insertOne(data)
                .then((data) => {
                    resolve(data);
                }).catch((error) => {
                    console.log(error);
                    reject({ code: 0, message: 'DB_ERROR' });
                })
        })
    }
    
}

module.exports = new DB
module.exports.handler = new DB

// const connectToDatabase = async (uri) => {
//   if (cachedDb) return cachedDb;
//   const client = await MongoClient.connect(uri, {
//     useUnifiedTopology: true,
//   });
//   cachedDb = client.db(DB_NAME);
//   return cachedDb;
// };

// const queryDatabase = async (db) => {
//   const pokemon = await db.collection("users").find({}).toArray();

//   return {
//     statusCode: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(pokemon),
//   };
// };

// module.exports.handler = async (event, context) => {
//   // otherwise the connection will never complete, since
//   // we keep the DB connection alive
//   context.callbackWaitsForEmptyEventLoop = false;

//   const db = await connectToDatabase('mongodb+srv://mongo:root@cluster0.xopxo.mongodb.net/test');
//   return queryDatabase(db);
// };
