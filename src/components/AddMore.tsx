import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

function AddMore() {
  const { books } = React.useContext(Context);

  return (
    <div className="addmore">
      {!!books.items.length && (
        <button
          className="addmore_btn"
          onClick={() => {
            books.fetchItems();
          }}
        >
          Add More
        </button>
      )}
    </div>
  );
}

export default observer(AddMore);
