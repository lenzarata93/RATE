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
      <option value="provider1">Доставчик 1</option>
      <option value="provider2">Доставчик 2</option>
      <option value="provider3">Доставчик 3</option>
    
    </select>
  </div>

  <button type="submit">Изпрати</button>
</form>

    );
}