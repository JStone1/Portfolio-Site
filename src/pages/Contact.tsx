import Layout from "@components/Layout/Layout";
import InfoCard from "@components/InfoCard/InfoCard";
import ImageCard from "@components/ImageCard/ImageCard";

const Contact = () => {
  return (
    <>
      <Layout>
        <InfoCard
          title="Web Developer and Creative Technologist"
          keyword="John Stone"
          desc="Creative Computing Graduate"
        ></InfoCard>
        <ImageCard />
      </Layout>{" "}
    </>
  );
};

export default Contact;
