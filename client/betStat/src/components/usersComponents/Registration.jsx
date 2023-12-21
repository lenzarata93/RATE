import styles from "../usersComponents/Registration.module.css"

export default function Registration(){
    return(
<form className="register-form">

  <div>
    <label for="username">Потребителско име:</label>
    <input type="text" id="username" name="username" required/>
  </div>

  <div>
    <label for="email">Имейл:</label>
    <input type="email" id="email" name="email" required/>
  </div>

  <div>
    <label for="password">Парола:</label>
    <input type="password" id="password" name="password" required/>
  </div>

  <div>
    <label for="repeat-password">Повтори парола:</label>
    <input type="repeat-password" id="repeat-password" name="repeat-password" required/>
  </div>

  <div>
    <label for="birthdate">Дата на раждане:</label>
    <input type="date" id="birthdate" name="birthdate" required/>
  </div>

  <div>
    <label for="gender">Пол:</label>
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