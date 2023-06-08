import { observer } from "mobx-react-lite";

import Header from "./Header";
import SearchForm from "./SearchForm";

const SearchComponent = observer(() => {
  return (
    <div>
      <Header title="Check the weather in your city" />
      <SearchForm placeholder="Enter here..." />
    </div>
  );
});

export default SearchComponent;
