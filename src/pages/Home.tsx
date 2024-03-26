import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import ExpTimeline from "@components/ExpTimeline/ExpTimeline";
import ContactCTA from "@components/ContactCTA/ContactCTA";
import ToolkitList from "@components/ToolkitList/ToolkitList";
const Home = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <SectionTitle
          title="About me"
          desc="Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web..."
          background={false}
        ></SectionTitle>
        <ExpTimeline></ExpTimeline>
        <ContactCTA
          title="Want to work together?"
          prompt="Get in touch"
          link="contact"
        ></ContactCTA>
        <SectionTitle title="My Toolkit" background={true}>
          <ToolkitList></ToolkitList>
        </SectionTitle>
        <ContactCTA
          title="Interested in what you see?"
          prompt="Let's chat!"
          link="contact"
          desc="Please get in touch and we can make something great together!"
        ></ContactCTA>
        <ContactCTA
          title="See my previous projects"
          prompt="Explore work"
          link="projects"
        ></ContactCTA>
      </Layout>
    </>
  );
};

export default Home;
