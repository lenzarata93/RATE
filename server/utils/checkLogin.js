const User= require('../DataBase/Models/userModel');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const  {generateToken} = require('./generateWebToken')

 const checkLogin =async (loginData)=>{
   let user={};
    //console.log(req.body.username)
    console.log(`check login`)
    try {
     haveUser = await User.findOne({username: loginData.username})
 console.log(`Check username : ${haveUser}`);
 if(haveUser === null){
    throw new Error ('WRONG USERNAME')
}
const matchPass = await bcrypt.compare(loginData.password,haveUser.password);

if (!matchPass){
    throw new Error ('Wrong PASSWORD')
};
console.log(`HAVEUSER IS :${haveUser}`)
//return haveUser;
    } catch (error) {
        throw new Error (error)
    }

    console.log('before generate')
 const token = await generateToken(haveUser);


 console.log(`TOKEN IS :${token}`)
 return token
 



};
module.exports = {checkLogin}