import Layout from "@components/Layout/Layout";
import InfoCard from "@components/InfoCard/InfoCard";
import ImageCard from "@components/ImageCard/ImageCard";

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
