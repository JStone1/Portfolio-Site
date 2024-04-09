import "./ProjectContainer.scss";
import ProjectEntry from "@components/ProjectEntry/ProjectEntry";

/* Icons from https://devicon.dev/ - include either "plain" or "original" depending on the language*/

interface Props {}

function ProjectContainer({}: Props) {
  return (
    <>
      <div className="project-container">
        <ProjectEntry
          title="BSU Computing"
          desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work. Built with Elementor and utilisises ACF and custom post types to create a dynamic WordPress site."
          languages={[
            "wordpress-plain",
            "php-plain",
            "javascript-plain",
            "figma-plain",
          ]}
          siteURL="https://www.bsucomputing.co.uk/"
        />
        <ProjectEntry
          title="Podcasting Toolkit"
          desc="Created a website for a client to showcase their research in using podcasts as a learning resource within higher education. The client needed to be able to add and update content in the future, so the site was built using WordPress, allowing for easy content management after handover."
          languages={["wordpress-plain", "javascript-plain"]}
          siteURL="https://podcastingtoolkit.co.uk/"
        />
        <ProjectEntry
          title="Mate Rate"
          desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post. Users can score other people’s post once, on a scale of 1-5. Each rating on a post will have a direct impact on the post author’s profile score. This means if lots of people rate a user’s post highly, that person will have a higher profile score, and therefore be more “popular” than other people."
          languages={[
            "html5-plain",
            "css3-plain",
            "javascript-plain",
            "sass-plain",
          ]}
          gitURL="https://github.com/JStone1/Mate-Rate"
          siteURL="https://mate-rate.glitch.me/"
        />
        <ProjectEntry
          title="Deep Dive"
          desc="Deep Dive is an interactive website with 3D elements made with Three JS and GSAP. It follows the journey of a penguin through it's daily struggles."
          languages={[
            "html5-plain",
            "javascript-plain",
            "threejs-original-wordmark",
            "sass-plain",
          ]}
          gitURL="https://github.com/JStone1/Deep-Dive"
          siteURL="https://jstone1.github.io/Deep-Dive/"
        />
        <ProjectEntry
          title="Sign Learn"
          desc="Sign Learn is an interactive learning tool prototype that aims to help people learn the alphabet in ISL (Irish Sign Language). This was developed as part of a university module. It is built using p5.js canvas and ml5.js Handpose model."
          languages={[
            "html5-plain",
            "css3-plain",
            "javascript-plain",
            "p5js-original",
          ]}
          gitURL="https://github.com/JStone1/Sign-Learn"
          siteURL="https://jstone1.github.io/Sign-Learn/"
        />
        <ProjectEntry
          title="Killing Blow"
          desc="Killing Blow is a simple but addictive game where the aim is to destroy the smug-looking (and probably evil) aliens in deep space! There is only 1 control - tap to shoot!  However, with only a limited amount of lives, players must use their reaction skills to progress through the series of increasingly difficult levels."
          languages={["", "", "", ""]}
          siteURL="https://jstone1.itch.io/killing-blow"
        />
      </div>
    </>
  );
}

export default ProjectContainer;
