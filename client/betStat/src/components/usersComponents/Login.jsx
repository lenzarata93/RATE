export default function Login(){
    return(    <form>
        <div>
          <label for="username">Потребителско име:</label>
          <input type="text" id="username" name="username" required/>
        </div>
      
        <div>
          <label for="password">Парола:</label>
          <input type="password" id="password" name="password" required/>
        </div>
      
        <button type="submit">Вход</button>
      </form>);
}