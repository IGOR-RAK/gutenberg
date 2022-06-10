import React from "react";
import { DebounceInput } from "react-debounce-input";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

function SearchInput() {
  const { books } = React.useContext(Context);

  React.useEffect(() => {
    books.fetchItemsByAuthor();
  }, [books.searchInput]);

  return (
    <div>
      <DebounceInput
        className="input"
        placeholder={"Search..."}
        minLength={2}
        debounceTimeout={300}
        value={books.searchInput}
        onChange={(e) => books.setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default observer(SearchInput);
