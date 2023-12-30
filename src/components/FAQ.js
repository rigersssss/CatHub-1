import { FaReply } from "react-icons/fa";

function FAQ() {
  return (
    <div className="footer__FAQ">
      <ul>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
            Q1: What is <span className="footer__FAQ-red-text">CatHub Membership</span>?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            <span className="footer__FAQ-red-text">CatHub Membership</span> is a membership that allows you to use CatHub for free forever! (So it's like, instead of just free, it's super free){" "}
          </div>
        </li>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
            Q2: How can I acquire a Full CatHub Membership?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            Head to the navigation in the top left corner and scroll to the
            bottom until you can see{" "}
            <span className="footer__FAQ-red-text">
              Get Full Cathub Membership
            </span>{" "}
            option.
          </div>
        </li>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
            Q3: Does CatHub collect any of my data, and if so, what?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            CatHub collects data required for account creation, which is stored
            in the local state, as well as the information needed to send
            requests to the API for fetching images using the text search
            feature located under the magnifying glass icon. It is a portfolio
            project and is not intended to store any of your data beyond the
            local state.
          </div>
        </li>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
            Q4: Are the cat photos on CatHub free to use?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            Yes, the cat photos on CatHub are free to use for a non-comercial
            purposes but for more detailed terms of use please visit the pages{" "}
            <a href="https://thecatapi.com/">The Cat API</a> and{" "}
            <a href="https://www.pexels.com/license/">Pexels</a>.
          </div>
        </li>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
            Q5: Can I fetch images few times per second?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            Please, don't.{" "}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FAQ;
