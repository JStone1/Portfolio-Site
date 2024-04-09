import "./ProjectContainer.scss";
import ProjectEntry from "@components/ProjectEntry/ProjectEntry";

interface Props {}

function ProjectContainer({}: Props) {
  return (
    <>
      <div className="project-container">
        <ProjectEntry
          title="BSU Computing"
          desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work. Built with Elementor and utilisises ACF and custom post types to create a dynamic WordPress site."
          languages={["wordpress", "javascript", "css3", "figma"]}
          siteURL="https://www.bsucomputing.co.uk/"
        />
        <ProjectEntry
          title="Podcasting Toolkit"
          desc="Created a website for a client to showcase their research in using podcasts as a learning resource within higher education. The client needed to be able to add and update content in the future, so the site was built using WordPress, allowing for easy content management after handover."
          languages={["wordpress", "javascript", "css3"]}
          siteURL="https://podcastingtoolkit.co.uk/"
        />
        <ProjectEntry
          title="Mate Rate"
          desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post. Users can score other people’s post once, on a scale of 1-5. Each rating on a post will have a direct impact on the post author’s profile score. This means if lots of people rate a user’s post highly, that person will have a higher profile score, and therefore be more “popular” than other people."
          languages={["html5", "css3", "javascript", "sass"]}
          gitURL="https://github.com/JStone1/Mate-Rate"
          siteURL="https://mate-rate.glitch.me/"
        />
      </div>
    </>
  );
}

export default ProjectContainer;
