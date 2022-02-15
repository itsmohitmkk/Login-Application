var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const validator =  require('validator')
userSchema = new Schema( {
	username:{
		type :  String,
		required: true
	},
	password: String,
	firstName : String,
	lastName : String,
	email :{
        type :String,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Write correct EMAIL');
            }
        }
    },
	address : String,
	phone : {
		type : Number,
		validator(value){
			if(!validator.isNumeric(value)){
				throw new Error("Not a Number");
			}
		}
	}
}),
user = mongoose.model('user', userSchema);

module.exports = user;