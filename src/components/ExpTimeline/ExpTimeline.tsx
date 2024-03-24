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
        <TimelineItem className="item">
          <TimelineOppositeContent className="date" color="text.secondary">
            2019 - 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="dot" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="title">
            Bath Spa University
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="item">
          <TimelineOppositeContent className="date" color="text.secondary">
            July 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="dot" color="primary" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="title">Graduation</TimelineContent>
        </TimelineItem>
        <TimelineItem className="item">
          <TimelineOppositeContent className="date" color="text.secondary">
            Aug-Nov 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="dot" color="secondary" />
            <TimelineConnector className="line" />
          </TimelineSeparator>
          <TimelineContent className="title">Internship</TimelineContent>
        </TimelineItem>
        <TimelineItem className="item">
          <TimelineOppositeContent className="date" color="text.secondary">
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              <TimelineDot className="dot outlined"></TimelineDot>
            </NavLink>
          </TimelineSeparator>
          <TimelineContent className="title">
            Currently looking!
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default ExpTimeline;
