import { useState } from 'react';
import styles from './Moves.module.css'

export default function Moves(){

  const [amount,setAmount] = useState('')
const depositHandler =(e)=>{
console.log('deposit clicked')
};
const withdrawHandler = (e) =>{
  console.log('withdraw clicked')
};

const amountChangeHanler = (e) =>{
  setAmount(Number(e.target.value))

}

    return(
        <form>
  <div>
    <label htmlFor="amount">Сума:</label>
    <input type="number" id="amount" name="amount" step="1.00" defaultValue={amount} onChange={amountChangeHanler}/>
  </div>

  <div>
    <label  htmlFor="transactionType" >Тип на транзакцията:</label>
    <button className={styles.deposit} onClick={depositHandler}>Депозит</button>
    <button className={styles.withdraw} onClick={withdrawHandler}>Теглене</button>
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