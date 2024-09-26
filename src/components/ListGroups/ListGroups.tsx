import React, { useState } from "react";
import { Fragment } from "react";
import { MouseEvent } from "react";
import { list, listL, message } from "../utils/ListGroupFunctions";

function ListGroups() {
  let items = ["orange", "orange", "orange", "orange", "orange", "orange"];
const [view,setView] = useState(true)
  //items =[]
  let L = view;

  return (
    <>
      <div className="d-flex flex-row m-3 justify-content-between">
        <h1>List</h1>
        <button onClick={()=>{
          setView(!view)
        }}>Change view</button>
      </div>
      <ul className="list-group">
        {message(items)}
        { list(items,L) }
        
      </ul>
    </>
  );
}

export default ListGroups;
