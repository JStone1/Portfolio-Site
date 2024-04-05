import "./ProjectContainer.scss";
import ProjectEntry from "@components/ProjectEntry/ProjectEntry";
import SectionTitle from "@components/SectionTitle/SectionTitle";

interface Props {}

function ProjectContainer({}: Props) {
  return (
    <>
      <SectionTitle
        title="Projects"
        desc="Here's a collection of projects so far, this will grow in the future !"
        background={false}
      ></SectionTitle>
      <div className="project-container">
        <ProjectEntry
          title="BSU Computing"
          desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work. Built with Elementor and utilisises ACF and custom post types to create a dynamic WordPress site."
        ></ProjectEntry>
        <ProjectEntry
          title="Podcasting Toolkit"
          desc="Created a website for a client to showcase their research in using podcasts as a learning resource within higher education. The client needed to be able to add and update content in the future, so the site was built using WordPress, allowing for easy content management after handover."
        ></ProjectEntry>
      </div>
    </>
  );
}

export default ProjectContainer;
