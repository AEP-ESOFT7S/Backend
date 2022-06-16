var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstName: String ,
  lastName: String ,
  phone: String ,
  cep: String ,
  city: String ,
  neighborhood: String ,
  address: String ,
  number: String ,
  complement: String ,
  email: String ,
  password: String ,
  cnpj: String,
  corporateName: String,
  clientId : String,
  clientSecret : String,
  merchantId : String,
  cpf: String,
  meansOfDelivery: String,
  bank : String,
  agency: String,
  account: String,
  type: String 
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');