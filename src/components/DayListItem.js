import React from "react";
import './DayListItem.scss';
import classnames from 'classnames';

export default function DayListItem(props) {

    let currentClass = "day-list__item";
    const clsName = classnames(currentClass, {
        [`${currentClass}--selected`]: props.selected,
        [`${currentClass}--full`]: !props.spots
    })

    function formatSpots() {
        let format = ` `;
        format += props.spots > 1 ? `${props.spots} spots remaining` 
            : (props.spots === 0 ? "no spots remaining" : `${props.spots} spot remaining`);
        return format;
    }
    // function handleClick() {
    //     props.setDay(props.name)
    // }

  return (
      
    <li className={clsName} >
      <h2 className="text--regular" onClick={props.setDay}>{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}