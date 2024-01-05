const jwt = require('jsonwebtoken');
const util = require('util')
const { SECRET } = require('./secret');

const generateToken=async(user)=>{
    console.log(`generating token`)
    const payload = {
        username: user.username,
        email: user.email,
        gender: user.gender,
        birthdate: user.birthdate,
        id: user._id
    };
    //const token = await util.promisify(jwt.sign(payload, SECRET, { expiresIn: '1d' }));
    const signAsync = util.promisify(jwt.sign);
    const token =await signAsync(payload, SECRET, { expiresIn: '1d' })
    return (token);
}

module.exports = {generateToken};
