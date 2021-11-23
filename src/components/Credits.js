import React from 'react'

const Credits = (props) => {

  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    })
  }

  return (
    <div class="credits-debits">
      <h1>Credits</h1>
      <ul>
        {creditsView()}
      </ul>
      <form onSubmit={props.addCredit}>
        <input type="text" name="description" />
        <input type="text" name="amount" />
        <button type="submit">Add Credit</button>
      </form>
    </div>
  )
}

export default Credits;