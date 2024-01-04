const baseUrl = 'http://localhost:4000'

export const userRegistration = async(userData)=>{
    console.log(`UserREGISTRATION DATA IS : ${userData.email}`)
try {
    const res = await fetch (`${baseUrl}/register`,{
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json',
           // 'Access-Control-Allow-Origin' : '*'
            
        },
        body : JSON.stringify(userData),
    })
   

   
    if(res.status ===200){
        const user = await res.json();
        console.log(`Потребителят е успешно регистриран.`);
        console.log(`DATA is : ${JSON.stringify(user)}`)
        //const user = JSON.stringify(data);
        console.log(`User is : ${user.username}`)
        //return data;

    }else{
        throw new Error (`PROBLEM WITH REGISTRATION`)
    }
    
} catch (error) {
    console.error(`${error}`)
}
return userData
};

export const loginUser = async (username,password) =>{
const res = await fetch (`${baseUrl}/login`,{
    method : 'POST',
    headers :{
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({username,password})

});


};
