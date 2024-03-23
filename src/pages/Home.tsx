import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero/Hero";
import SectionTitle from "@components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <SectionTitle
          title="About me"
          desc="Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web...Hello! My name is John and I make things on the web..."
        ></SectionTitle>
      </Layout>
    </>
  );
};

export default Home;
