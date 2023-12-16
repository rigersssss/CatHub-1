import { MdOutlinePrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="footer__privacy-policy">
      <MdOutlinePrivacyTip className="footer__privacy-policy-icon"/>
      <div className="footer__privacy-policy-text">
        Learn more about how CatHub protects your privacy and handles your data
        by reviewing our <Link to="privacypolicy" className="footer__privacy-policy-link">Privacy Policy</Link>. We are committed to ensuring the
        security and confidentiality of your information.
      </div>
    </div>
  );
}

export default PrivacyPolicy;
