import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";


function Loader() {
  const { books } = React.useContext(Context);

  return (
    <div className="loader_box">
      {books.isLoading ? <div className="loader"></div> : null}
    </div>
  );
}

export default observer(Loader);
