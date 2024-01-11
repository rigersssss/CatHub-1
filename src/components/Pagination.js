import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  selectUserSelectedBreed,
  fetchCatImagesAsync,
  fetchCatImagesByTagsAsync,
  selectCatBreeds
} from "../store/slices/catImageSlice";
import scrollToImages from "../helpers/scroll";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageButtons, setPageButtons] = useState(getPageButtons());

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userSelectedBreed = useSelector(selectUserSelectedBreed);
  const catBreeds = useSelector(selectCatBreeds)

  const handleWindowResize = useCallback(() => {
    setPageButtons(getPageButtons());
  }, []);

  useEffect(() => {
    const getPageNumberFromPath = () => {
      const match = location.pathname.match(/\/page\/(\d+)/);
      return match ? parseInt(match[1]) : 1;
    };

    setCurrentPage(getPageNumberFromPath());

    // Set the number of page buttons when the component mounts
    setPageButtons(getPageButtons());

    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [location.pathname, handleWindowResize]);

  // Determine the number of page buttons based on the current width
  function getPageButtons() {
    return window.innerWidth > 900 ? 10 : 5;
  }

  // Creating number buttons
  const createPagination = () => {
    const startPage = Math.max(1, currentPage - Math.floor(pageButtons / 2));

    return Array.from({ length: pageButtons }, (_, i) => {
      const pageNumber = startPage + i;
      return (
        <li className="pagination__li" key={i}>
          <button
            className={`pagination__option pagination__option--number ${
              pageNumber === currentPage ? "pagination-active" : ""
            }`}
            onClick={() => handlePaginationClick(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      );
    });
  };

  const handlePaginationClick = (pageNumber) => {
    if (pageNumber === currentPage) {
      return null;
    }
  
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    // After 600ms update the URL
    setTimeout(() => {
      setCurrentPage(pageNumber);
      // If user didn't select any breed yet set it to Random
      const selectedBreedId = userSelectedBreed?.id || "Random";

      if (catBreeds.some((breed) => breed.id !== selectedBreedId)) {
        dispatch(fetchCatImagesByTagsAsync(selectedBreedId));
      } else {
        dispatch(fetchCatImagesAsync(selectedBreedId));
      }
      navigate(`/page/${pageNumber}`);
      scrollToImages();
    }, 600);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    navigate(`/page/${currentPage - 1}`);
    dispatch(fetchCatImagesAsync(userSelectedBreed.id));
    scrollToImages();
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    navigate(`/page/${currentPage + 1}`);
    dispatch(fetchCatImagesAsync(userSelectedBreed.id));
    scrollToImages();
  };

  return (
    <div className="pagination">
      <ul className="pagination__ul">
        <li className="pagination__li">
          <button
            className="pagination__option pagination__option--prev"
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {createPagination()}
        <li className="pagination__li">
          <button
            className="pagination__option pagination__option--next"
            onClick={handleNextClick}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
