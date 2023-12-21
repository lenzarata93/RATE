import { useState } from "react";
import styles from "../usersComponents/Registration.module.css"

export default function Registration(){

const [registerValues,setRegisterValues]=useState({
  username : '',
  email : '',
  password : '',
  repeatPassword : '',
  birthdate : '',
  gender : ''


  
})

    return(
<form className="register-form">

  <div>
    <label htmlFor="username">Потребителско име:</label>
    <input type="text"
    id="username"
    name="username"
    value={registerValues.username}/>
  </div>

  <div>
    <label htmlFor="email">Имейл:</label>
    <input type="email"
    id="email"
    name="email"
    value={registerValues.email}/>
  </div>

  <div>
    <label htmlFor="password">Парола:</label>
    <input type="password"
    id="password"
    name="password"
    value={registerValues.password}/>
  </div>

  <div>
    <label htmlFor="repeatPassword">Повтори парола:</label>
    <input type="repeatPassword"
    id="repeatPassword"
    name="repeatPassword"
    value={registerValues.repeatPassword}/>
  </div>

  <div>
    <label htmlFor="birthdate">Дата на раждане:</label>
    <input type="date"
    id="birthdate"
    name="birthdate"
    value={registerValues.birthdate}/>
  </div>

  <div>
    <label htmlFor="gender">Пол:</label>
    <select id="gender" name="gender">
      <option value="">Изберете пол</option>
      <option value="male">Мъж</option>
      <option value="female">Жена</option>
    </select>
  </div>

  <button type="submit">Регистрирай се</button>
</form>


    );
}