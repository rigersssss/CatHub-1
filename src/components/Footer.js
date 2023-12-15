import { useState } from "react";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import PrivacyPolicy from "./PrivacyPolicy";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
function Footer() {
  const [showSubOptions, setShowSubOptions] = useState({
    showContact: false,
    showFAQ: false,
    showNewsletter: false,
    showPrivacyPolicy: false,
    optionClicked: false,
  });

  const [optionClicked, setOptionClicked] = useState({
    Contact: false,
    FAQ: false,
    Newsletter: false,
    PrivacyPolicy: false,
  });

  const handleClick = (data) => {
    setOptionClicked({
      ...optionClicked,
      [data]: !optionClicked[data],
    });

    switch (data) {
      case "Contact":
        setShowSubOptions({
          ...showSubOptions,
          showContact: !showSubOptions.showContact,
          optionClicked: !showSubOptions.optionClicked,
        });
        break;
      case "FAQ":
        setShowSubOptions({
          ...showSubOptions,
          showFAQ: !showSubOptions.showFAQ,
          optionClicked: !showSubOptions.optionClicked,
        });
        break;
      case "Newsletter":
        setShowSubOptions({
          ...showSubOptions,
          showNewsletter: !showSubOptions.showNewsletter,
          optionClicked: !showSubOptions.optionClicked,
        });
        break;
      case "Privacy Policy":
        setShowSubOptions({
          ...showSubOptions,
          showPrivacyPolicy: !showSubOptions.showPrivacyPolicy,
          optionClicked: !showSubOptions.optionClicked,
        });
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  };
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>
          The CatHub team updates and expands our library with new information
          about cats every day. Everything is right here and fully accessible.
          We offer a vast selection of content dedicated to the world of cats,
          which you can browse. CatHub, as the most innovative and comprehensive
          website dedicated to cats, features thematic channels. We provide cat
          content streaming, downloadable articles, galleries with photos, and
          the opportunity to join the largest community of cat lovers on the
          internet. We make every effort to constantly improve the site by
          adding new features so that your interest in the world of cats never
          fades. We always welcome your feedback, so feel free to reach out to
          us if you have any questions or suggestions.
        </p>
      </div>
      <div>
        <ul className="footer__list-options">
          <li className="footer__option">
            <div
              className="footer__option-wrapper"
              onClick={() => {
                handleClick("Contact");
              }}
            >
              <div className="footer__option-title">Contact</div>
              <button className="footer__option-button">
                {optionClicked["Contact"] ? (
                  <AiOutlineCaretUp className="footer__option-icon" />
                ) : (
                  <AiOutlineCaretDown className="footer__option-icon" />
                )}
              </button>
            </div>
            {showSubOptions.showContact && <Contact />}
          </li>
          <li className="footer__option">
            <div
              className="footer__option-wrapper"
              onClick={() => {
                handleClick("FAQ");
              }}
            >
              <div className="footer__option-title">FAQ</div>
              <button className="footer__option-button">
                {optionClicked["FAQ"] ? (
                  <AiOutlineCaretUp className="footer__option-icon" />
                ) : (
                  <AiOutlineCaretDown className="footer__option-icon" />
                )}
              </button>
            </div>
            {showSubOptions.showFAQ && <FAQ />}
          </li>
          <li className="footer__option">
            <div
              className="footer__option-wrapper"
              onClick={() => {
                handleClick("Newsletter");
              }}
            >
              <div className="footer__option-title">Newsletter</div>
              <button className="footer__option-button">
                {optionClicked["Newsletter"] ? (
                  <AiOutlineCaretUp className="footer__option-icon" />
                ) : (
                  <AiOutlineCaretDown className="footer__option-icon" />
                )}
              </button>
            </div>
            {showSubOptions.showNewsletter && <Newsletter />}
          </li>
          <li className="footer__option">
            <div
              className="footer__option-wrapper"
              onClick={() => {
                handleClick("Privacy Policy");
              }}
            >
              <div className="footer__option-title">Privacy Policy</div>
              <button className="footer__option-button">
                {optionClicked["Privacy Policy"] ? (
                  <AiOutlineCaretUp className="footer__option-icon" />
                ) : (
                  <AiOutlineCaretDown className="footer__option-icon" />
                )}
              </button>
            </div>
            {showSubOptions.showPrivacyPolicy && <PrivacyPolicy />}
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
