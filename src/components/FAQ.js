import { FaReply } from "react-icons/fa";

function FAQ() {
  return (
    <div className="footer__FAQ">
      <ul>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
            Q1: How can I acquire a Full CatHub Membership?{" "}
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
            Q2: Can I add my own cat to the API?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            Yes you can! <a href="https://cataas.com/upload">Cataas</a> API allows users to add their own furries so they can be fetched.
          </div>
        </li>
        <li className="footer__FAQ-option">
          <div className="footer__FAQ-question">
          Q3: Are the cat photos on CatHub free to use?{" "}
          </div>
          <div className="footer__FAQ-answer">
            <span className="footer__FAQ-orange-text">
              <FaReply className="footer__FAQ-answer-icon" /> A:
            </span>{" "}
            Yes, the cat photos on CatHub are free to use for a non-comercial purposes but for more detailed terms of use please visit the pages <a href="https://thecatapi.com/">The Cat API</a> and <a href="https://cataas.com/">Cataas</a>.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FAQ;
