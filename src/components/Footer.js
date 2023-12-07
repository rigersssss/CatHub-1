import {
    AiOutlineCaretDown,
  } from "react-icons/ai";

function Footer() {
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
              <div className="footer__option-title">Title</div>
              <button className="footer__option-button"><AiOutlineCaretDown/></button>
            </li>
            <li className="footer__option">
              <div className="footer__option-title">Title</div>
              <button className="footer__option-button"><AiOutlineCaretDown/></button>
            </li>
            <li className="footer__option">
              <div className="footer__option-title">Title</div>
              <button className="footer__option-button"><AiOutlineCaretDown/></button>
            </li>
            <li className="footer__option">
              <div className="footer__option-title">Title</div>
              <button className="footer__option-button"><AiOutlineCaretDown/></button>
            </li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
