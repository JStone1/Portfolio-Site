import "./ExpTimeline.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

interface Props {}

function ExpTimeline({}: Props) {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".dot").forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        if (rect.top < window.innerHeight - 250 && rect.bottom >= 0) {
          dot.classList.add("active-dot");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Timeline className="timeline-container">
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            2020 - 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot id="dot1" className="dot" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Bath Spa University</h2>
            <p className="timeline-desc">
              Studying my degree in Creative Computing allowed me to work on a
              wide variety of exciting projects, from {""}
              <span className="highlight-text">
                developing and deploying web apps
              </span>
              , creating fun and compelling mobile games. My degree has taught
              me to leverage technology innovatively and to prioritise {""}
              <span className="highlight-text">
                user-focused, iterative design
              </span>{" "}
              in all my projects.
              <br />
              <br />I was also fortunate enough to be selected by my university
              for the <span className="highlight-text">Turing Scheme</span>{" "}
              placement in Australia. I worked directly with the University of
              Adelaide, was introduced to cutting edge technology, and completed
              a module in {""}
              <span className="highlight-text">VR Design and Development.</span>
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            Aug-Nov 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot id="dot2" className="dot" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Post graduation</h2>
            <p className="timeline-desc">
              After completing my degree, I immediately started the developent
              of two websites: one as an intern and the other as a freelancer.
              Throughout these projects, I took charge of {""}
              <span className="highlight-text">requirement gathering</span> and
              held {""}
              regular meetings with the clients to showcase ongoing progress.
              Recognising the importance of easy content management after
              handover, I opted to to build both sites using {""}
              <span className="highlight-text">WordPress.</span>
              {""}
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              <TimelineDot id="dot3" className="dot"></TimelineDot>
            </NavLink>
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Currently looking</h2>
            <p className="timeline-desc">
              I'm now seeking the next opportunity to apply my knowledge and
              contribute to the creation of exceptional projects. If this aligns
              with you, please feel free to {""}
              <NavLink aria-label="Contact John Stone" to="/contact">
                <span id="highlight-link-text" className="highlight-text">
                  get in touch!
                </span>
              </NavLink>
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default ExpTimeline;
