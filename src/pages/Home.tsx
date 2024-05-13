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
          title="John Stone Form"
          desc="Web Developer and Creative Technologist "
          imageURL="/assets/profile-img.jpg"
        />
        <SectionTitle
          title="About me"
          desc={[
            "Hello, ",
            <span key="highligh-text-key" className="highlight-text">
              my name is John!
            </span>,
            " I specialise in front-end development, but have tried my hand at many different tech through my coding journey. Outside of that, I enjoy baking bread, playing table tennis, and walking along the beautiful south coast.",
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
