import { useState } from 'react';
import styles from './Moves.module.css'

export default function Moves(){

  const [transaction,setTransaction] = useState({
    amount : '',
    provider : 'choose'
  })
const depositHandler =(e)=>{
  e.preventDefault();
  console.log(`Deposit : ${transaction.amount} лв.`);
  console.log(`Provider is ${transaction.provider}`)
console.log('deposit clicked');
clearField();
};
const withdrawHandler = (e) =>{
  e.preventDefault();
  console.log('withdraw clicked');
  console.log(`Withdraw : ${transaction.amount} лв.`);
  console.log(`Provider is ${transaction.provider}`)
  clearField();
};

const transactionChangeHandler = (e) =>{
  setTransaction(state =>({
    ...state,
    [e.target.name] : e.target.value
  }))

};

const clearField = ()=>{
  setTransaction({
    amount : '',
    provider : 'choose'
  });
}

    return(
        <form>
  <div>
    <label htmlFor="amount">Сума:</label>
    <input type="number" id="amount" name="amount" step="1.00" value={transaction.amount} onChange={transactionChangeHandler}/>
  </div>

  <div>
    <label  htmlFor="transactionType" >Тип на транзакцията:</label>
    <button className={styles.deposit} onClick={depositHandler}>Депозит</button>
    <button className={styles.withdraw} onClick={withdrawHandler}>Теглене</button>
  </div>

  <div>
    <label htmlFor="provider">Доставчик:</label>
    <select id="provider" name="provider" onChange={transactionChangeHandler} value={transaction.provider}>
    <option value="choose">Избери доставчик </option>
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