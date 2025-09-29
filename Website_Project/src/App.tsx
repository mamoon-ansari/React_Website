import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import theme from "./theme";

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
            justifyContent: "center", // Center content vertically
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
