export default function Moves(){
    return(
        <form>
  <div>
    <label for="amount">Сума:</label>
    <input type="number" id="amount" name="amount" step="0.01" required/>
  </div>

  <div>
    <label for="transactionType">Тип на транзакцията:</label>
    <select id="transactionType" name="transactionType">
      <option value="deposit">Депозит</option>
      <option value="withdrawal">Теглене</option>
    </select>
  </div>

  <div>
    <label for="provider">Доставчик:</label>
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