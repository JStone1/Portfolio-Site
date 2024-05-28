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
          title="John Stone"
          desc="Web Developer and Creative Technologist"
          imageURL="/assets/profile-img-large.webp"
          srcSet="/assets/profile-img-small.webp"
          imageAlt="Headshot of John Stone, a front end developer"
        />
        <SectionTitle
          title={
            <>
              Hello, {""}
              <span key="highligh-text-key" className="highlight-text">
                I'm John!
              </span>
            </>
          }
          desc={[
            "Primarily specialising in ",
            <span key="highligh-text-key" className="highlight-text">
              front-end development
            </span>,
            ", my goal is to create outstanding user experiences on the web. I love learning new technologies and have experimented with many before, always eager to explore something new. Outside of that, I enjoy playing table tennis, badminton, and walking along the beautiful south coast!",
          ]}
          background={false}
        />
        <ExpTimeline />
        <ContactCTA
          title="View my previous projects"
          prompt="Explore work"
          link="projects"
        />
        <SectionTitle title="Current Toolkit" background={true}>
          <ToolkitList></ToolkitList>
        </SectionTitle>
        <ContactCTA
          title="Interested in what you see?"
          prompt="Let's chat!"
          link="contact"
          desc="Get in contact and we can make something great together!"
        />
      </Layout>
    </>
  );
};

export default Home;
