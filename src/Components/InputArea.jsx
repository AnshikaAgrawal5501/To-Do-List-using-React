import React, { useState } from "react";



function InputArea(props) {

    return <div className="form">
        <input type={props.text} onChange={props.inputFunction} value={props.value}/>
        <button onClick={props.addFunction}>
          <span>Add</span>
        </button>
      </div>
}

export default InputArea;