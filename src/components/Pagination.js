import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setPaginatedImagesPage, selectPaginatedImagesPage, selectCatImages, selectUserSelectedBreed, fetchCatImagesAsync } from "../store/slices/catImageSlice";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageButtons, setPageButtons] = useState(getPageButtons());

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const paginatedImagesPage = useSelector(selectPaginatedImagesPage)
  const catImages = useSelector(selectCatImages)
  const userSelectedBreed = useSelector(selectUserSelectedBreed)

  const handleWindowResize = useCallback(() => {
    setPageButtons(getPageButtons());
  }, []);

  useEffect(() => {
    const match = location.pathname.match(/\/page\/(\d+)/);
    const page = match ? parseInt(match[1]) : 1;

    // Check if number of page already exists in array
    const existingPage = paginatedImagesPage.find((obj) => obj.page === page && obj.breedId === userSelectedBreed.id);

    // If it doesn't exist, clear the array and add a new entry
    if (!existingPage) {
      const updatedPages = [{ page, breedId: userSelectedBreed.id, images: catImages }];
      dispatch(setPaginatedImagesPage(updatedPages));
    }

    console.log(paginatedImagesPage);
  }, [dispatch, location.pathname, paginatedImagesPage, catImages, userSelectedBreed]);

  useEffect(() => {
    // Getting number of page from URL
    const getPageNumberFromPath = () => {
      const match = location.pathname.match(/\/page\/(\d+)/);
      return match ? parseInt(match[1]) : 1;
    };

    // Setting current page as the one from the URL
    setCurrentPage(getPageNumberFromPath());

    // Update the number of page buttons when the component mounts
    setPageButtons(getPageButtons());

    // Add event listener for window resize
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
    // Scroll smoothly to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    // After 500ms, update the URL
    setTimeout(() => {
      setCurrentPage(pageNumber);
      navigate(`/page/${pageNumber}`);
      dispatch(fetchCatImagesAsync(userSelectedBreed.id))
    }, 600);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    navigate(`/page/${currentPage - 1}`);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    navigate(`/page/${currentPage + 1}`);
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
