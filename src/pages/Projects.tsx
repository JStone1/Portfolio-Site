import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import ProjectContainer from "@components/ProjectContainer/ProjectContainer";
import SectionTitle from "@components/SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <>
      <Layout>
        <Hero
          title="What I’ve done so far"
          keyword="Projects"
          desc="A collection of commercial and university projects"
          imageURL="src/assets/mountain.jpg"
          isReverse={true}
        />
        <SectionTitle
          title="Projects"
          desc="Here's a collection of projects so far, this will grow in the future !"
          background={false}
        />
        <ProjectContainer />
      </Layout>
    </>
  );
};

export default Projects;
