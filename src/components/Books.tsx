import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

function Books() {
  const { books } = React.useContext(Context);
  console.log(books.items);
  React.useEffect(() => {
    books.fetchItems();
  }, []);
  if (books.isLoading) {
    return (
      <div className="books">
        <div className="loading">...LOADING</div>
      </div>
    );
  }
  return (
    <div className="books">
      <div className="loading">{books.items&&books.items.map(item=><div>{item.title}</div>)}</div>
    </div>
  );
}

export default observer(Books);
