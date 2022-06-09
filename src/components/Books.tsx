import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";


function Cards() {
    const { books } = React.useContext(Context);    
    console.log(books.items)   
    return (<h1>Books Page</h1>)
  }
  
  export default observer(Cards);