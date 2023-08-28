import './ExpenseDate.css'

function ExpenseDate(props) {
  let month = props.date.toLocaleString('en-US', { month: 'long' })
  // let year = props.date.toLocaleString('en-US',{year:'numeric'})
  let year = props.date.getFullYear()
  let day = props.date.toLocaleString('en-US', { day: 'numeric' })
  // let day = props.date.toLocaleString('en-US',{day:'2-digit'})
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}th</div>
    </div>
  )
}

export default ExpenseDate