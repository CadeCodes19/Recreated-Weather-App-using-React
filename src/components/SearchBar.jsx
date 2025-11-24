import searchImg from "../images/search.png";

function SearchBar() {
  return (
    <div className="flex gap-3 md:gap-4 items-center">
      <img
        className="cursor-pointer w-5 md:w-6 h-5 md:h-6"
        src={searchImg}
        alt="Search"
      />
      <input
        className="flex-1 p-2 md:p-3 bg-blue-50 rounded-xl text-sm md:text-base"
        type="text"
        placeholder="Enter a City Name"
      />
    </div>
  );
}

export default SearchBar;
