import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import SearchInput from "./SearchInput";

function Header() {
  const { books } = React.useContext(Context);

  return (
    <div className="header">
      <div className="container">
        <h1>Read with Gutenberg</h1>
        <div className="right">
         
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default observer(Header);
