import React from 'react'
import styles from './currency.module.css'

const CurrencyExchanger = () => {
  return (
    <div className={styles.currencyContainer}>
        <div>
        <label>Amount</label><br/>
      <input type="text"  name="shutUp" placeholder='25'/>
      </div>
      <selector>
        <option>1</option>
        <option>2</option>
      </selector>
    </div>
  )
}

export default CurrencyExchanger
