import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ServicesCards from "../components/ServicesCards"; 
import SpecializedContractor from "../components/SpecializedContractor";
import CompanyFooter from "../components/CompanyFooter";
import ProjectsGallery  from "../components/ProjectsGallery";


const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "700px",
        bgcolor: "grey.300",
        p: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "text.primary",
        }}
      >
        Welcome to Rashid Shams Technical Services LLC
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4,
        }}
      >
        Specialized in Infrastructure Works, Road Maintenance Works,
        Underground Utility Works, Pavement Works, Civil Works and
        Electromechanical Works
      </Typography>

      {/* ✅ Add all the cards here */}
      <Box sx={{ width: '100%', mb: 6 }}>
        <ServicesCards />
      </Box>

      {/* Middle Section - Specialized Contractor */}
      <Box sx={{ width: '100%', mb: 6 }}>
        <SpecializedContractor />
      </Box>

      {/* Projects Gallery Section */}
      <Box sx={{ width: '100%', mb: 6 }}>
        <ProjectsGallery />
      </Box>

      {/* Lower Section - Company Footer */}
      <Box sx={{ width: '100%', mb: 0 }}>
        <CompanyFooter />
      </Box>
    </Box>
  );
};

export default Home;
