import headerImage from "../images/header-image.png";

function HeaderImage() {
  return (
    <div className="header__image-box">
      <div className="header__image-text">
        <p>
          Cat<span className="header__image-text-orange">Hub</span> is a {" "}
          <span className="header__image-text-orange">website</span> with a {" "}
          <span className="header__image-text-orange">cat content</span> {" "}
          and is <span className="header__image-text-orange">dedicated</span> to {" "}
          <span className="header__image-text-orange">cat lovers.</span>
        </p>
      </div>
      <img src={headerImage} alt="white-brown cat" className="header__image" />
    </div>
  );
}

export default HeaderImage;
