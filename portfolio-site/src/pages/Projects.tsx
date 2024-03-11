import Layout from "../components/Layout";
import InfoCard from "../components/InfoCard";
import ImageCard from "../components/ImageCard";

const Projects = () => {
  return (
    <>
      <Layout>
        <ImageCard />
        <InfoCard
          title="Web Developer and Creative Technologist"
          keyword="John Stone"
          desc="Creative Computing Graduate"
        ></InfoCard>
      </Layout>
    </>
  );
};

export default Projects;
