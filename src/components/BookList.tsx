import React from "react";
import love from "../img/love.png";
import heart from "../img/heart.png";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import BookCard from "./BookCard";

function BooksList() {
  const { books } = React.useContext(Context);

  return (
    <div className="box">
      {books.items &&
        books.renders.map((item) => (
          <BookCard key={item.renderKey} item={item} />
        ))}
    </div>
  );
}

export default observer(BooksList);
