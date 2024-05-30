import Layout from "@components/Layout/Layout";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout footerMargin={100}>
        <div className="visually-hidden">
          {/* Have to include theme switcher to gain access to theme colours, hides it from view. */}
          <ThemeSwitcher />
        </div>
        <div className="privacy-policy-text">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect the personal information you provide
            through our contact form.
          </p>
        </div>

        <div className="privacy-policy-container">
          <h2>Information Collection</h2>
          <p>
            When you fill out the contact form on our site, we collect the
            following information:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Subject</li>
            <li>Message content</li>
          </ul>
          <p>This information is voluntarily provided by you.</p>
          <h2>Use of Information</h2>
          <p>We use the information collected through the contact form to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Provide the information or services you request</li>
          </ul>
          <p>
            We may also use your information to improve our website and
            services.
          </p>
          <h2>Information Sharing</h2>
          <p>
            We do not share your personal information with third parties, except
            as necessary to provide our services or as required by law.
          </p>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes for which it was collected, or as required by
            applicable laws.
          </p>
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, delete, and restrict the
            processing of your personal information. To exercise these rights,
            please contact us at{" "}
            <a href="mailto:jdstone141@gmail.com">jdstone141@gmail.com</a>.
          </p>
          <h2>Changes to the Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review this
            policy periodically.
          </p>
          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <a href="mailto:jdstone141@gmail.com">jdstone141@gmail.com</a>.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
