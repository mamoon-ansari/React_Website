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
              "Fire Hydrant / Fire Fighting Networks Gre, Grpe, Hdpe, Upvc Pipe Works",
              "Pipe Jacking Works",
              "Service Line Coring & Ditching Works",
              "Pipe Line Patching & Lamination Works",
              // "Pipe Line Plugging & Rectification Works",
              // "Street Lighting Works",
              // "Construction Of Manholes, Chambers, Gullys & Soakway",
            ]}
            link="#"
          />
        </Item>
      </Grid>

      {/* Civil Works */}
      <Grid item xs={12} sm={6} md={3}>
        <Item>
          <InfoCard
            title="Civil Works"
            image="/assets/civilwork.jpg"
            items={[
              "Earth Works",
              "Guard Rail Installation Works",
              "Fencing & Barbed Wire Works",
              "Pavement Works",
              "Carpentry and Flooring Works",
              "False Ceiling & Light Partition Installation",
              "Floor & Wall Tiling Works",
              "Plastering Works",
              "Boundary Wall & Other Structural Works",
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
            title="Road Works"
            image="/assets/roadwork.jpg"
            items={[
              "Asphalt Reinstatement and Maintenance",
              "Road Marking Works",
              "Road Kerb Works",
              "Road & Traffic Sign Installation",
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
            title="Electromechanical Works"
            image="/assets/electromechanicalwork.jpg"
            items={[
              "Electro Mechanical Equipment Installation & Maintenance",
              "Air Conditioning Ventilation & Air Filtration System Installation & Maintenance Maintenance Service",
              "Plumbing & Sanitary Maintenance Works",
              "Swimming Pool Maintenance Work",
            ]}
            link="#"
          />
        </Item>
      </Grid>
    </Grid>
  );
};

export default ServicesCards;
