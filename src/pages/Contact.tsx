import Layout from "@components/Layout/Layout";
import ContactForm from "@components/ContactForm/ContactForm";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

const Contact = () => {
  return (
    <>
      <Layout footerMargin={100}>
        <div className="visually-hidden">
          {/* Have to include theme switcher to gain access to theme colours, hides it from view. */}
          <ThemeSwitcher />
        </div>
        <ContactForm />
      </Layout>
    </>
  );
};

export default Contact;
