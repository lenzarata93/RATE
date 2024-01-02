

export const regValidation = async(regData) =>{
console.log(`REGISTRATION VALIDATE : ${regData}`);

if(regData.username === '' || regData.username.length === 0){
throw new Error('Username must be more than 0 characters')
};

if(regData.email === '' || regData.email.length === 0){
    throw new Error ('Invalid email');

};

if(regData.password === '' || regData.password.length ===0){
    throw new Error('Password fields are required')
}

if(regData.password !==regData.repeatPassword){
    throw new Error('Password dont match');
};



return(regData)

};