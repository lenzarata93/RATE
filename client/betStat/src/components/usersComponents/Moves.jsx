import styles from './Moves.module.css'

export default function Moves(){
    return(
        <form>
  <div>
    <label htmlFor="amount">Сума:</label>
    <input type="number" id="amount" name="amount" step="1.00" required/>
  </div>

  <div>
    <label  htmlFor="transactionType" >Тип на транзакцията:</label>
    <button className={styles.deposit}>Депозит</button>
    <button className={styles.withdraw}>Теглене</button>
  </div>

  <div>
    <label htmlFor="provider">Доставчик:</label>
    <select id="provider" name="provider">
      <option value="winbet">WinBet </option>
      <option value="efbet">Efbet </option>
      <option value="palmsbet">PalmsBet</option>
      <option value="alphawin">AlphaWin</option>
      <option value="8888">8888</option>
      <option value="betano">Betano</option>
      <option value="inbet">Inbet</option>
      <option value="sesame">Sesame</option>
      <option value="other">Друг</option>
    
    </select>
  </div>

  <button type="submit">Изпрати</button>
</form>

    );
}