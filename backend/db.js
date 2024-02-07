const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String

})
const accounts = mongoose.Schema({
    userId: String,
    balance: Number
})
const User = mongoose.model('User', userSchema);
const Accounts = mongoose.model('Accounts', accounts);
module.exports = {
    User,
    Accounts
}