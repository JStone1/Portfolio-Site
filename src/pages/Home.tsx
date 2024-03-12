import Layout from "@components/Layout/Layout";
import InfoCard from "@components/InfoCard/InfoCard";
import ImageCard from "@components/ImageCard/ImageCard";
import Grid from "@components/Grid/Grid";

const Home = () => {
  return (
    <>
      <Layout>
        <Grid>
          <InfoCard
            title="Web Developer and Creative Technologist"
            keyword="John Stone"
            desc="Creative Computing Graduate"
          ></InfoCard>
          <ImageCard />
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
