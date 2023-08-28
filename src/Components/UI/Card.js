import { Children } from 'react';
import './Card.css'

function Card(props) {
  // props.className is used to get the className used in any page and it can be used as multiple class by add it to the card class
  const classes = 'card ' + props.className;
  return(
    // here props.children is used so that any code between div of the Card Components gets Executed properly
    <div className={classes}>
      {/* props.children is used as a wrapper component which help to execute all the code present between the opening and closing Card tag */}
      {props.children}
    </div>
  )
}

export default Card;