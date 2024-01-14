import { useContext, useState } from "react";
import styles from "../usersComponents/Login.module.css"
import { loginUser } from "../../API/usersAPI";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";





export default function Login(){
//const context = useContext(userContext);
  const navigate =useNavigate();
  const { setToken } = useContext(userContext);
  const {setUser}=useContext(userContext)
  const [loginValues,setLoginValues]= useState({
    username : '',
    password : '',
  });
  
  const changeLoginValuesHandler = (e)=>{
    setLoginValues(state=>({
      ...state,
      [e.target.name] : e.target.value,
    }))
  };
  const clearValues = ()=>{
    setLoginValues({
      username:'',
      password: ''})
    }
    const onSubmitLoginHandler = async(e)=>{
      e.preventDefault();
  
    console.log(loginValues);
   const token= await loginUser(loginValues.username,loginValues.password);
    //clearValues();
    console.log(`LOGIN JSX TOKEN IS : ${token}`);
    setLoginValues({
      username: '',
      password : '',
    })
    try {
      if(token){
        setToken(token);
        setUser(loginValues.username);
        localStorage.setItem('token',token);
        navigate('/')


      }else{
        localStorage.removeItem('token');
        throw new Error(`Wrong USERNAME OR PASSWORD`)
      }
    } catch(err) {
      console.error(err)
    }
    
    //const user =await getUserData(token);
    //console.log(`AFTER DECODING USER IS :${user}`)
      //setUser(user)
    
    
  }


    return(  
      <form className="login-form" onSubmit={onSubmitLoginHandler}>
  <div className='login'>
    <label htmlFor="username">Потребителско име:</label>
    <input type="text" id="username" name="username" value={loginValues.username} onChange={changeLoginValuesHandler}/>
  </div>
  
  <div>
    <label htmlFor="password">Парола:</label>
    <input type="password" id="password" name="password" value={loginValues.password} onChange={changeLoginValuesHandler}/>
  </div>
  
  <button type="submit">Вход</button>
</form>
    );
}