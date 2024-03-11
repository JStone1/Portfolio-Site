import Layout from "../components/Layout";
import InfoCard from "../components/InfoCard";
import ImageCard from "../components/ImageCard";

const Home = () => {
  return (
    <>
      <Layout>
        <InfoCard
          title="Web Developer and Creative Technologist"
          keyword="John Stone"
          desc="Creative Computing Graduate"
        ></InfoCard>
        <ImageCard />
      </Layout>
    </>
  );
};

export default Home;
