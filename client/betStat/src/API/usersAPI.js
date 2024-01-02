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
   

   
    if(res.ok){
        const data = await res.json();
        console.log(`Потребителят е успешно регистриран.`);
        console.log(`DATA is : ${data.username}`)
        return data;

    }else{
        throw new Error (`PROBLEM WITH REGISTRATION`)
    }
    
} catch (error) {
    console.error(`${error}`)
}
return userData
};
