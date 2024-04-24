import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import ExpTimeline from "@components/ExpTimeline/ExpTimeline";
import ContactCTA from "@components/ContactCTA/ContactCTA";
import ToolkitList from "@components/ToolkitList/ToolkitList";
const Home = () => {
  return (
    <>
      <Layout footerMargin={250}>
        <Hero
          title="Web Developer and Creative Technologist"
          keyword="John Stone"
          desc="Creative Computing Graduate"
          imageURL="src/assets/profile-img.jpg"
        />
        <SectionTitle
          title="About me"
          desc={[
            "Hello! ",
            <span className="highlight-text">My name is John</span>,
            ", and I create experiences on the web. Specialising in front-end development, I",
          ]}
          background={false}
        />
        <ExpTimeline />
        <ContactCTA
          title="See my previous projects"
          prompt="Explore work"
          link="projects"
        />
        <SectionTitle title="My Toolkit" background={true}>
          <ToolkitList></ToolkitList>
        </SectionTitle>
        <ContactCTA
          title="Interested in what you see?"
          prompt="Let's chat!"
          link="contact"
          desc="Please don't hesitate to get in touch and we can make something great together!"
        />
      </Layout>
    </>
  );
};

export default Home;
