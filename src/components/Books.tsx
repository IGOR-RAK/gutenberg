import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import SearchInput from "./SearchInput";

function Books() {
  const { books } = React.useContext(Context);
  React.useEffect(() => {
    books.fetchItems();
  }, []);

  console.log("favorites", books.favorites);

  return (
    <div className='wrapper'>
      <div>
        {books.favorites.map((fav) => (
          <div key={fav.id}>{fav.title}</div>
        ))}
      </div>
      <SearchInput />
      <div className='box'>
        {books.items &&
          books.renders.map((item, index) => (
            <div
              className={"item"}
              style={{
                backgroundImage: `url(${item.img}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              key={item.id}
            >
              <button
                onClick={() => {
                  books.setFavorites(item);
                }}
              >
                Add to favorites
              </button>
              <div>{item.author}</div>
              <div>{item.title}</div>
              {/* <div>{item.img && <img src={item.img} alt='' />}</div> */}

              <div>
                {item.link && (
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    Read here...
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>

      {books.isLoading ? <div className='loading'>...LOADING</div> : null}
      <button
        onClick={() => {
          books.fetchItems();
        }}
      >
        Add More
      </button>
    </div>
  );
}

export default observer(Books);
