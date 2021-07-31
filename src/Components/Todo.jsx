import React, { useState } from "react";



function ToDo(props) {

    const [isChecked, checked]=useState(false);
    function toggleCheck() {
        checked(!isChecked);
    }

    return <div >
        <li style={{textDecoration: isChecked? "line-through" : "none"}}>{props.item} &nbsp;
        <i onClick={toggleCheck} className="far fa-check-square"></i> &nbsp;
        <i onClick={() => {props.delItem(props.id)}} className="far fa-trash-alt"></i>
        </li>
        
    </div>
}

export default ToDo;