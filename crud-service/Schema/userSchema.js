import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name : String, 
    username : String,
    email : String,
    phone : String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'User');

const user = mongoose.model('User', userSchema)

export default user;

//module.exports = mongoose.model('User', userSchema)