import headerImage from "../images/header-image.png";

function HeaderImage() {
  return (
    <div className="header__image-box">
      <div className="header__image-text">
        <p>
          Cat<span className="header__image-text-orange">Hub</span> is an{" "}
          <span className="header__image-text-orange">alternative</span> to the{" "}
          <span className="header__image-text-orange">popular movie site</span>,
          is <span className="header__image-text-orange">dedicated</span> to{" "}
          <span className="header__image-text-orange">cat lovers.</span>
        </p>
      </div>
      <img src={headerImage} alt="white-brown cat" className="header__image" />
    </div>
  );
}

export default HeaderImage;
