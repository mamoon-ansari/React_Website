import React from "react";
import Box from "@mui/material/Box";
import HomeHeader from "../components/HomeHeader";
import ServicesCards from "../components/ServicesCards"; 
import SpecializedContractor from "../components/SpecializedContractor";
import CompanyFooter from "../components/CompanyFooter";
import ProjectsGallery from "../components/ProjectsGallery";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
      }}
    >
      {/* Header Section with Services Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          px: 4,
        }}
      >
        <Box sx={{ width: '100%', mb: 6 }}>
          <HomeHeader />
        </Box>

        {/* Services Cards */}
        <Box sx={{ width: '100%' }}>
          <ServicesCards />
        </Box>
      </Box>

      {/* Specialized Contractor Section */}
      <Box sx={{ width: '100%' }}>
        <SpecializedContractor />
      </Box>

      {/* Projects Gallery Section */}
      <Box sx={{ width: '100%' }}>
        <ProjectsGallery />
      </Box>

      {/* Company Footer Section */}
      <Box sx={{ width: '100%' }}>
        <CompanyFooter />
      </Box>
    </Box>
  );
};

export default Home;