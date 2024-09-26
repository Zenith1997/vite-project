import React, { useState } from "react";
import { Fragment } from "react";
import { MouseEvent } from "react";
import { list,  message } from "../utils/ListGroupFunctions";








interface Props{
  items:string[];
  heading:string
}




function ListGroups({items,heading}:Props) {
const [view,setView] = useState(true)
  //items =[]
  let L = view;

  return (
    <>
      <div className="d-flex flex-row m-3 justify-content-between">
        <h1>{heading}</h1>
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
