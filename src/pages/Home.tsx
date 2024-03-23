import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import ExpTimeline from "@components/ExpTimeline/ExpTimeline";
import ContactCTA from "@components/ContactCTA/ContactCTA";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <SectionTitle
          title="About me"
          desc="Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web..."
        ></SectionTitle>
        <ExpTimeline></ExpTimeline>
        <ContactCTA
          title="Want to work together?"
          prompt="Get in touch"
        ></ContactCTA>
      </Layout>
    </>
  );
};

export default Home;
