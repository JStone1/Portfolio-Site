import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import ProjectContainer from "@components/ProjectContainer/ProjectContainer";
import SectionTitle from "@components/SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <>
      <Layout footerMargin={250}>
        <Hero
          title="Projects"
          desc="A collection of commercial and university creations"
          imageURL="/assets/beach.jpg"
          isReverse={true}
        />
        <SectionTitle
          title="My work"
          // desc="Below is a mixture of projects I have completed, both during university, and in a commercial setting."
          background={false}
        />
        <ProjectContainer />
      </Layout>
    </>
  );
};

export default Projects;
