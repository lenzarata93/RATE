const User= require('../DataBase/Models/userModel');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

 const checkLogin =async (loginData)=>{
    //console.log(req.body.username)
    console.log(`check login`)
const haveUser = await User.findOne({username: loginData.username})
 console.log(`Check username : ${haveUser}`);
 if(!haveUser){
    throw new Error ('WRONG USERNAME')
};
const matchPass = await bcrypt.compare(loginData.password,haveUser.password);

if (!matchPass){
    throw new Error ('Wrong PASSWORD')
};

return haveUser;

};
module.exports = {checkLogin}