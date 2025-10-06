import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import theme from "./theme";
import ScrollToTop from "./ScrollToTop";

// About Sub-pages
import CompanyProfile from "./pages/about/CompanyProfile";
import DirectorsMessage from "./pages/about/DirectorsMessage";
import OrganizationChart from "./pages/about/OrganizationChart";

// Services Sub-pages
import InfrastructureWorks from "./pages/services/InfrastructureWorks";
import RoadWorks from "./pages/services/RoadWorks";
import CivilWorks from "./pages/services/CivilWorks";
import ElectromechanicalWorks from "./pages/services/ElectromechanicalWorks";
import FabricationWorks from "./pages/services/FabricationWorks";
import PreBuiltCabins from "./pages/services/PreBuiltCabins";
import HVAC from "./pages/services/HVAC";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container
          maxWidth={false}
          sx={{
            px: 0,
            pt: '64px', // Add top padding for fixed header (default AppBar height)
            minHeight: "calc(100vh - 64px - 64px)", // Adjust for header and footer height
            width: "100%", // Ensure full width
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ScrollToTop />
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/company-profile" element={<CompanyProfile />} />
            <Route path="/about/directors-message" element={<DirectorsMessage />} />
            <Route path="/about/organization-chart" element={<OrganizationChart />} />
            
            {/* Services Routes */}
            <Route path="/services/infrastructure" element={<InfrastructureWorks />} />
            <Route path="/services/road-works" element={<RoadWorks />} />
            <Route path="/services/civil-works" element={<CivilWorks />} />
            <Route path="/services/electromechanical" element={<ElectromechanicalWorks />} />
            <Route path="/services/fabrication-works" element={<FabricationWorks />} />
            <Route path="/services/prebuilt-cabins" element={<PreBuiltCabins />} />
            <Route path="/services/hvac-services" element={<HVAC />} />
            
            {/* Contact Route */}
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;