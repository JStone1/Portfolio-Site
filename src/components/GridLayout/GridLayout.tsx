import "./GridLayout.scss";
import InfoCard from "@components/InfoCard/InfoCard";
import ImageCard from "@components/ImageCard/ImageCard";
import { ReactNode } from "react";
import { Grid } from "@mui/material";

interface Props {
  children: ReactNode;
}

function GridLayout({ children }: Props) {
  return (
    <>
      <div className="grid-background"></div>
      <Grid
        container
        spacing={6}
        // justifyContent={"center"}
        // alignItems={"center"}
        className="grid-container"
      >
        <Grid item xs={10} md={7}>
          <InfoCard
            title="Web Developer and Creative Technologist"
            keyword="John Stone"
            desc="Creative Computing Graduate"
          />
        </Grid>
        {/* <Grid item xs={0} md={4}></Grid> */}
        <Grid item xs={10} md={5} alignSelf={"center"}>
          <ImageCard />
        </Grid>
      </Grid>
    </>
  );
}

export default GridLayout;
