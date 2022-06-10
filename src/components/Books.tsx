import React from "react";
import love from "../img/love.png";
import heart from "../img/heart.png";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

function Books() {
  const { books } = React.useContext(Context);
  React.useEffect(() => {
    books.fetchItems();
  }, []);

  React.useEffect(() => {
    books.initFav();
  }, []);

  console.log("favorites", books.favorites);

  if (books.isSearchLoading) {
    return (
      <main className="main">
        <div className="loader"></div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="box">
        {books.items &&
          books.renders.map((item, index) => (
            <div className={"item"} key={item.id}>
              <div className="image">
                {item.img && <img src={item.img} alt="" />}
              </div>

              <div className="info">
                <div>
                  {/* <div>{item.author}</div> */}
                  <div>{item.title}</div>

                  <button
                    className="favorite_btn"
                    onClick={() => {
                      books.setFavorites(item);
                    }}
                  >
                    {item.fav ? (
                      <img width={"16px"} src={heart} />
                    ) : (
                      <img width={"16px"} src={love} />
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
          ))}
      </div>

      <div className="loader_box">
        {books.isLoading ? <div className="loader"></div> : null}
      </div>
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
    </main>
  );
}

export default observer(Books);
