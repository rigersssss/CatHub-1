import { AiOutlineArrowRight } from "react-icons/ai";

function SearchInput() {
  return (
    <div className="search">
      <div className="search__container">
        <input className="search__input" />
        <button className="search__confirm">
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
