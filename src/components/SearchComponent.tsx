import { FC } from "react";
import { observer } from "mobx-react-lite";

import Header from "./Header";
import SearchForm from "./SearchForm";

// type SearchComponentProps = {
//   placeholder: string;
// };

const SearchComponent = observer(() => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <Header title="Check the weather in your city" />
      <SearchForm placeholder="Enter here..." />
    </div>
  );
});

export default SearchComponent;
