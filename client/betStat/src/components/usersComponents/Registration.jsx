import styles from "../usersComponents/Registration.module.css"

export default function Registration(){
    return(
<form className="register-form">

  <div>
    <label htmlFor="username">Потребителско име:</label>
    <input type="text" id="username" name="username" required/>
  </div>

  <div>
    <label htmlFor="email">Имейл:</label>
    <input type="email" id="email" name="email" required/>
  </div>

  <div>
    <label htmlFor="password">Парола:</label>
    <input type="password" id="password" name="password" required/>
  </div>

  <div>
    <label htmlFor="repeat-password">Повтори парола:</label>
    <input type="repeat-password" id="repeat-password" name="repeat-password" required/>
  </div>

  <div>
    <label htmlFor="birthdate">Дата на раждане:</label>
    <input type="date" id="birthdate" name="birthdate" required/>
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