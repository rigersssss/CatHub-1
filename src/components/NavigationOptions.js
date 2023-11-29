import {
  AiFillVideoCamera,
  AiOutlineSend,
  AiOutlineAppstore,
  AiOutlineCaretDown,
  AiFillCalculator,
  AiFillCamera,
  AiOutlineUsergroupAdd,
  AiFillSafetyCertificate,
  AiFillRead,
  AiFillGithub
} from "react-icons/ai";
import { FaCat, FaPaw } from "react-icons/fa";

function NavigationOptions() {
  return (
    <div>
      <ul className="navigation__options-list">
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiFillVideoCamera />
              <p className="navigation__option-topic-name">Cat Videos</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiOutlineSend className="navigation__shorties" />
              <p className="navigation__option-topic-name">Shorties</p>
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiOutlineAppstore />
              <p className="navigation__option-topic-name">Categories</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <FaCat />
              <p className="navigation__option-topic-name">Best cats</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiFillCalculator />
              <p className="navigation__option-topic-name">Random</p>
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiFillCamera />
              <p className="navigation__option-topic-name">Photos</p>
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiOutlineUsergroupAdd />
              <p className="navigation__option-topic-name">Communities</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
        </li>
      </ul>
      <div className="navigation__membership">
        <p>Get Full CatHub Membership</p>
      </div>
      <div className="navigation__other-options">
        <div className="navigation__other-option">
          <AiFillSafetyCertificate />
          <p>Trust & Safety</p>
        </div>
        <div className="navigation__other-option">
          <AiFillRead />
          <p>Breed Info</p>
        </div>
        <div className="navigation__other-option">
          <FaPaw />
          <p>Cat Health</p>
        </div>
        <div className="navigation__other-option">
          <AiFillGithub />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default NavigationOptions;
