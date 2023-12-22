import { MdOutlinePrivacyTip } from "react-icons/md";

function PrivacyPolicyPage() {
  
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__go-to-main">
        <a href="/">Go back to the main page</a>
      </div>
      <h1 className="privacy-policy__h1">
        <MdOutlinePrivacyTip className="privacy-policy__h1-icon" /> Privacy
        Policy
      </h1>
      <div className="privacy-policy__main">
        <p className="privacy-policy__text">Effective Date: 15.12.23 yr. </p>
        <p className="privacy-policy__text">
          Thank you for using CatHub, where we bring you the joy of cat images
          tailored to your preferences. Your privacy is important to us, and we
          are committed to protecting and respecting it.
        </p>
        <ul className="privacy-policy__ol">
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">
              1. Information We Collect:
            </h3>
            <p className="privacy-policy__text">
              CatHub retrieves cat images from APIs such as Pexels and The Cat
              API. We do not collect any personal information unless explicitly
              provided by you for account registration or other features.
            </p>
          </li>
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">
              2. Information We Collect:
            </h3>
            <p className="privacy-policy__text">
              We use the Pexels and The Cat API to fetch cat images based on
              tags or breeds specified by users. The API requests may include
              device-related information, but we do not store or process this
              data.
            </p>
          </li>
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">3. Account Registration:</h3>
            <p className="privacy-policy__text">
              If you choose to create a CatHub account, we collect the
              information necessary for registration, such as your email address
              and username. This information is securely stored, and we do not
              share it with third parties.
            </p>
          </li>
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">
              4. How We Use Your Information:
            </h3>
            <p className="privacy-policy__text">
              We use the information collected to personalize your cat image
              viewing experience based on your specified preferences. Your
              account information, if provided, is used to enhance your
              interaction with CatHub.
            </p>
          </li>
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">5. Third-Party Services:</h3>
            <p className="privacy-policy__text">
              CatHub utilizes third-party services, such as Pexels and The Cat
              API, to provide cat images. These services have their privacy
              policies, and we recommend reviewing them to understand how your
              data is handled by them.
            </p>
          </li>
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">6. Third-Party Services:</h3>
            <p className="privacy-policy__text">
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the internet
              or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </li>
          <li className="privacy-policy__li">
            <h3 className="privacy-policy__point">7. Third-Party Services:</h3>
            <p className="privacy-policy__text">
              We reserve the right to update our Privacy Policy. Any changes
              will be effective upon posting the updated policy on CatHub. By
              continuing to use the app, you consent to the updated terms.
            </p>
          </li>
        </ul>
        <p className="privacy-policy__text">
          Thank you for using CatHub and trusting us with your privacy. Enjoy
          the adorable cat images!
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
