import styles from "../usersComponents/Login.module.css"
export default function Login(){
    return(  
      <form className="login-form">
  <div className='login'>
    <label htmlFor="username">Потребителско име:</label>
    <input type="text" id="username" name="username" required/>
  </div>
  
  <div>
    <label htmlFor="password">Парола:</label>
    <input type="password" id="password" name="password" required/>
  </div>
  
  <button type="submit">Вход</button>
</form>
    );
}