import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import ProjectContainer from "@components/ProjectContainer/ProjectContainer";

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
        ></Hero>
        <ProjectContainer></ProjectContainer>
      </Layout>
    </>
  );
};

export default Projects;
