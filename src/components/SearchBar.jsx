import searchImg from "../images/search.png";
import { useState } from "react";
import Trie from "../utils/Trie.js";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSearch() {
    onSearch(value);
  }
  return (
    <div className="flex gap-3 md:gap-4 items-center">
      <img
        className="cursor-pointer w-5 md:w-6 h-5 md:h-6"
        src={searchImg}
        alt="Search"
        onClick={handleSearch}
      />
      <input
        value={value}
        className="flex-1 p-2 md:p-3 bg-blue-50 rounded-xl text-sm md:text-base shadow-xl"
        type="text"
        placeholder="Enter a City Name"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
