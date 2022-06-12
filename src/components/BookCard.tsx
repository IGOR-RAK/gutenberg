import React from "react";
import love from "../img/love.png";
import heart from "../img/heart.png";
import { observer } from "mobx-react-lite";
import { IRenders } from "../models/ibook";
import { Context } from "../index";
import BookImage from "./BookImage";

interface IBookCard {
  item: IRenders;
}

const BookCard: React.FC<IBookCard> = ({ item }) => {
  const { books } = React.useContext(Context);

  return (
    <div className={"item"}>
      <BookImage item={item}/>

      <div className="info">
        <div>
          <div>{item.title}</div>

          <button
            className="favorite_btn"
            onClick={() => {
              books.setFavorites(item);
            }}
          >
            {item.fav ? (
              <img width={"16px"} src={heart} alt="" />
            ) : (
              <img width={"16px"} src={love} alt="" />
            )}
          </button>
        </div>
        <div>
          {item.link && (
            <a
              className="readhere"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              Read here...
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(BookCard);
