import cities from "../utils/cities.json";
import { useState } from "react";
import Trie from "../utils/Trie.js";
import SearchBtn from "../images/search.svg";

const trie = new Trie();
cities.forEach((city) => trie.insert(city));

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");
  const suggestions = value.length > 0 ? trie.search(value) : []; //the conditional value of an array

  function handleSearch() {
    onSearch(value);
  }
  return (
    <div className="flex">
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-blue-50 outline-none w-full p-2 rounded-lg relative"
          placeholder="Search city..."
        />

        {suggestions.length > 0 && (
          <div className="absolute flex flex-col top-full bg-blue-50 w-full gap-2 mt-1 p-2 rounded-lg">
            {suggestions.map((word) => (
              <button
                key={word}
                className="flex items-center cursor-pointer hover:bg-slate-200"
                onClick={() => setValue(word)}
              >
                <img src={SearchBtn} alt="search" className="size-6" />
                <span>{word}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <img
        className="cursor-pointer size-10"
        src={SearchBtn}
        alt="Search"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
