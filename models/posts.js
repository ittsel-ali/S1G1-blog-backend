 

var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://S2G2:helloworld81@cluster0-fdozn.mongodb.net/test';
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var postsSchema = mongoose.Schema(
    {
        title: String,
        body: String
    }
);

var Posts = mongoose.model('post', postsSchema);
exports.Model = Posts;