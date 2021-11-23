import React from 'react'

const Debits = (props) => {

  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    })
  }

  return (
    <div class="credits-debits">
      <h1>Debits</h1>
      <ul>
        {debitsView()}
      </ul>
      <form onSubmit={props.addDebit} class="field">
        <input type="text" name="description" placeholder="enter description"/>
        <input type="text" name="amount" placeholder="enter value"/>
        <button type="submit">Add Debit</button>
      </form>
    </div>
  )
}

export default Debits;