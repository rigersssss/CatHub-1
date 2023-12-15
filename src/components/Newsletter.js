import { AiOutlineArrowRight } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa";
function Newsletter() {
  return (
    <div className="footer__newsletter">
      <FaNewspaper className="footer__newsletter-icon" />
      <div className="footer__text">
        Subscribe to our newsletter to stay updated with the latest cat-related
        news, featured photos, and exclusive content.
      </div>
      <div className="footer__newsletter-input-box">
          <input
            type="email"
            className="footer__newsletter-input"
            placeholder="Your Email"
          />
          <AiOutlineArrowRight className="footer__newsletter-confirm-icon" />
      </div>
    </div>
  );
}

export default Newsletter;
