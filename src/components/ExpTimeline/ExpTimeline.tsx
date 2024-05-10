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
          console.log("Active dot ID:", dot.id);
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
              </span>{" "}
              {""}
              to creating fun and compelling mobile games. My degree has taught
              me to create projects with an emphasis on {""}
              <span className="highlight-text">
                user-focused, iterative design.
              </span>{" "}
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            July 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot id="dot2" className="dot" />

            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Turing Scheme</h2>
            <p className="timeline-desc">
              I was fortunate enough to be selected by my university for the
              Turing Scheme placement in Australia working with the University
              of Adelaide to complete a module in {""}
              <span className="highlight-text">VR Design and Development.</span>
              {/* {""} I was exposed to cutting edge technology and even created a
              VR game of my own! */}
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            Aug-Nov 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot id="dot3" className="dot" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Post grad work</h2>
            <p className="timeline-desc">
              After graduation, I got stuck straight into developing two
              websites, one as part of an internship and the other as a
              freelancer. I undertook {""}
              <span className="highlight-text">requirement gathering</span> and
              held {""}
              regular meetings with the clients to showcase progress. Both sites
              needed easy content management after handover, so the decision was
              to build them on {""}
              <span className="highlight-text">WordPress.</span>
              {""}
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            Now
          </TimelineOppositeContent>
          <TimelineSeparator>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              <TimelineDot id="dot4" className="dot"></TimelineDot>
            </NavLink>
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Currently looking</h2>
            <p className="timeline-desc">
              I am now looking for the next opportunity to implement what I have
              learned, and help create something fantastic! If this sounds like
              you, please don't hesitate to{" "}
              <NavLink to="/contact">
                <span id="highlight-link-text" className="highlight-text">
                  reach out!
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
