import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import AddMore from "./AddMore";
import Loader from "./Loader";
import BookList from "./BookList";

function Books() {
  const { books } = React.useContext(Context);
  React.useEffect(() => {
    books.fetchItems();
  }, []);

  
  if (books.isSearchLoading) {
    return (
      <main className="main">
         <Loader/>
      </main>
    );
  }

  return (
    <main className="main">
       <BookList/>
       <Loader/>
       <AddMore/>
    </main>
  );
}

export default observer(Books);
