import "./ExpTimeline.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { NavLink } from "react-router-dom";

interface Props {}

function ExpTimeline({}: Props) {
  return (
    <>
      <Timeline className="timeline-container">
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            2019 - 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="dot" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Bath Spa University</h2>
            <p className="timeline-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            July 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="dot" color="primary" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Graduation</h2>
            <p className="timeline-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            Aug-Nov 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="dot" color="secondary" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Freelance</h2>
            <p className="timeline-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="date" color="text.secondary">
            Now
          </TimelineOppositeContent>
          <TimelineSeparator>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              <TimelineDot className="dot outlined"></TimelineDot>
            </NavLink>
          </TimelineSeparator>
          <TimelineContent className="timeline-item-container">
            <h2 className="timeline-title">Currently looking</h2>
            <p className="timeline-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default ExpTimeline;
