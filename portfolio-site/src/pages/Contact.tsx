import PageContainer from "../components/Layout";
import InfoCard from "../components/InfoCard";
import ImageCard from "../components/ImageCard";

const Contact = () => {
  return (
    <>
      <PageContainer>
        <InfoCard
          title="Web Developer and Creative Technologist"
          keyword="John Stone"
          desc="Creative Computing Graduate"
        ></InfoCard>
        <ImageCard />
      </PageContainer>{" "}
    </>
  );
};

export default Contact;
