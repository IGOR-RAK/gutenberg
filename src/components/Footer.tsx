import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

function Header() {
  const { books } = React.useContext(Context);

  return (
    <footer className="footer">
      <div className="container">Created by Igor Rak</div>
    </footer>
  );
}

export default observer(Header);
