import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatImagesAsync, selectUserSelectedBreed } from "../store/slices/catImageSlice";

function Pagination() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const selectedBreed = useSelector(selectUserSelectedBreed)

  const handleButtonClick = (index) => {
    if (index === 0) {
      setNumbers([1, 2, 3, 4, 5]);
      navigate(`/`);
    } else if (index === 1 && numbers[1] !== 2) {
      setNumbers(numbers.map((num, i) => (i === 0 ? num : num - 1)));
    } else if (index >= 2) {
      const incrementValue = index - 2;
      setNumbers(numbers.map((num, i) => (i >= 1 ? num + incrementValue : num)));
    }

    navigate(`/page/${numbers[index]}`);
    dispatch(fetchCatImagesAsync(selectedBreed.id))
  };

  const handlePrevNextClick = (operation) => {
    if (operation === "Prev" && numbers[1] === 2) {
      return;
    }

    const incrementValue = operation === "Next" ? 1 : -1;
    setNumbers(numbers.map((num, i) => (i >= 1 ? num + incrementValue : num)));
  };

  useEffect(() => {
    const currentPage = getPageFromUrl();
    if (currentPage !== null) {
      if (currentPage === 0) {
        navigate(`/`);
      } else {
        navigate(`/page/${currentPage}`);
      }
    }
  }, [numbers, navigate]);

  const getPageFromUrl = () => {
    const match = window.location.pathname.match(/\/page\/(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  return (
    <div className="pagination">
      <ul className="pagination__ul">
        <li className="pagination__li">
          <button
            onClick={() => handlePrevNextClick("Prev")}
            className="pagination__option pagination__option--prev"
          >
            Prev
          </button>
        </li>
        {numbers.map((number, index) => (
          <li
            key={index}
            className={`pagination__li ${
              getPageFromUrl() === number ? "pagination-active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick(index)}
              className={`pagination__option pagination__option--number`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="pagination__li">
          <button
            onClick={() => handlePrevNextClick("Next")}
            className="pagination__option pagination__option--next"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
