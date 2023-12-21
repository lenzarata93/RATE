import { useState } from "react";
import styles from "../usersComponents/Login.module.css"



export default function Login(){

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
  const onSubmitLoginHandler = (e)=>{
    e.preventDefault();
    console.log(loginValues);
    clearValues();
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