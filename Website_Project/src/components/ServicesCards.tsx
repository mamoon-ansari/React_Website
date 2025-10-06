import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InfoCard from "./InfoCard";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  maxWidth: "1200px",
  margin: "0 auto",
}));

const HeaderSection = styled(Box)({
  textAlign: "center",
  marginBottom: "4rem",
});

const ServicesCards: React.FC = () => {
  return (
    <Box sx={{ 
      width: "100%", 
      background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
      color: "white",
      py: 8,
    }}>
      <HeaderSection>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#3498db",
            fontSize: { xs: "2.5rem", md: "3rem" },
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#ecf0f1",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Comprehensive technical solutions for infrastructure, road maintenance, civil works, and electromechanical projects in UAE
        </Typography>
      </HeaderSection>

      <StyledGridContainer container spacing={4}>
  {/* Infrastructure Works */}
  <Grid item xs={12} sm={6} md={3}>
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
        "Pipe Jacking Works",
        "Service Line Coring & Ditching Works",
        "Pipe Line Patching & Lamination Works",
      ]}
      link="/services/infrastructure" // Updated to proper route
      color="#3498db"
    />
  </Grid>

  {/* Civil Works */}
  <Grid item xs={12} sm={6} md={3}>
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
      link="/services/civil-works" // Updated to proper route
      color="#2c3e50"
    />
  </Grid>

  {/* Road Works */}
  <Grid item xs={12} sm={6} md={3}>
    <InfoCard
      title="Road Works"
      image="/assets/roadwork.jpg"
      items={[
        "Asphalt Reinstatement and Maintenance",
        "Road Marking Works",
        "Road Kerb Works",
        "Road & Traffic Sign Installation",
      ]}
      link="/services/road-works" // Updated to proper route
      color="#2980b9"
    />
  </Grid>

  {/* Electromechanical Works */}
  <Grid item xs={12} sm={6} md={3}>
    <InfoCard
      title="Electromechanical Works"
      image="/assets/electromechanicalwork.jpg"
      items={[
        "Electro Mechanical Equipment Installation & Maintenance",
        "Air Conditioning Ventilation & Air Filtration System Installation & Maintenance",
        "Plumbing & Sanitary Maintenance Works",
        "Swimming Pool Maintenance Work",
      ]}
      link="/services/electromechanical" // Updated to proper route
      color="#1abc9c"
    />
  </Grid>
</StyledGridContainer>

      {/* CTA Section */}
      {/* <Box sx={{ textAlign: "center", mt: 6 }}>
        <Box
          component="button"
          sx={{
            background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
            color: "white",
            border: "none",
            padding: "12px 32px",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
            },
          }}
        >
          View All Services
        </Box>
      </Box> */}
    </Box>
  );
};

export default ServicesCards;