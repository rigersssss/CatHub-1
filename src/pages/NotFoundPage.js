import { useNavigate } from "react-router-dom";
import image404 from "../images/cat404.png";

function NotFoundPage() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <div className="notfound">
      <h1 className="notfound__h1">Page not found</h1>
      <img className="notfound__image" src={image404} alt="white crying cat" />
      <p className="notfound__404">404</p>
      <button className="notfound__mainpage" onClick={goToMainPage}>Go to the main page</button>
    </div>
  );
}

export default NotFoundPage;
