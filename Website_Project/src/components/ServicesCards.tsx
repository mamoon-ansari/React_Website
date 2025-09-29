import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import InfoCard from "./InfoCard"; // our reusable card

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none", // no paper shadow behind
}));

const ServicesCards: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Infrastructure Works */}
      <Grid item xs={12} sm={6} md={3}>
        <Item>
          <InfoCard
            title="Infrastructure Works"
            image="/assets/infrawork.jpg"
            items={[
              "Water Networks",
              "Irrigation Networks",
              "Storm Water Networks",
              "Sewerage Networks",
              "Drainage Network",
              "Fire Hydrant / Fire Fighting Networks",
              "GRE, GRPE, HDPE, UPVC Pipe Works",
            ]}
            link="#"
          />
        </Item>
      </Grid>

      {/* Building Works */}
      <Grid item xs={12} sm={6} md={3}>
        <Item>
          <InfoCard
            title="Building Works"
            image="/assets/buildingwork.jpg"
            items={[
              "Residential Buildings",
              "Commercial Buildings",
              "Industrial Projects",
              "Renovations & Interiors",
            ]}
            link="#"
            shade="#1976d2"
          />
        </Item>
      </Grid>

      {/* Road & Highway Works */}
      <Grid item xs={12} sm={6} md={3}>
        <Item>
          <InfoCard
            title="Road & Highway Works"
            image="/assets/roadwork.jpg"
            items={[
              "Asphalt Paving",
              "Concrete Roads",
              "Bridges & Flyovers",
              "Footpaths & Cycle Tracks",
            ]}
            link="#"
            shade="#1976d2"
          />
        </Item>
      </Grid>

      {/* Electrical Works */}
      <Grid item xs={12} sm={6} md={3}>
        <Item>
          <InfoCard
            title="Electrical Works"
            image="/assets/electromechanicalwork.jpg"
            items={[
              "Street Lighting",
              "Power Distribution",
              "Substations",
              "Low Voltage Systems",
            ]}
            link="#"
          />
        </Item>
      </Grid>
    </Grid>
  );
};

export default ServicesCards;
