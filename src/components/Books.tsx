import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import SearchInput from "./SearchInput";

function Books() {
  const { books } = React.useContext(Context);
  React.useEffect(() => {
    books.fetchItems();
  }, []);

  console.log(books.favorites);

  return (
    <div className='wrapper'>
      {books.favorites.map((fav) => (
        <div>{fav}</div>
      ))}
      <div>
        <SearchInput />

        {books.items &&
          books.renders.map((item, index) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  books.setFavorites(item.id);
                }}
              >
                Add to favorites
              </button>
              <div>{item.author}</div>
              <div>{item.title}</div>
              <div>{item.img && <img src={item.img} alt='' />}</div>

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
