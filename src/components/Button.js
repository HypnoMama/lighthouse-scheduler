import React from "react";
import classnames from 'classnames';
// , { useState }

import "components/Button.scss";

export default function Button(props) {
   const btnClassName = classnames("button", 
      {
         "button--confirm": props.confirm, 
         "button--danger": props.danger, 
         "button--warning": props.warning, 
         "button--alert": props.alert
      })
 
   return <button disabled={props.disabled} onClick={props.onClick} className={btnClassName}>{props.children}</button>

 }