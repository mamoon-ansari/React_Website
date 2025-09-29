import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CompanyFooter: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2c3e50",
        color: "white",
        py: 6,
        px: 4,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "left", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "#3498db",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            RASHID SHAMS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#ecf0f1",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            RASHID SHAMS TECHNICAL SERVICES LLC
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              color: "#bdc3c7",
              maxWidth: "800px",
              fontSize: "1rem",
            }}
          >
            Specialized in Infrastructure Works, Road Maintenance Works, Underground Utility Works, Pavement Works, Civil Works and Electromechanical Works in Dubai, UAE
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Core Services Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#3498db",
                fontSize: "1.4rem",
                borderBottom: "2px solid #3498db",
                pb: 1,
                display: "inline-block",
              }}
            >
              Our Core Services
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1.5, 
                  color: "#ecf0f1",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                • Infrastructure Works
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1.5, 
                  color: "#ecf0f1",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                • Road Works
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1.5, 
                  color: "#ecf0f1",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                • Civil Works
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1.5, 
                  color: "#ecf0f1",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                • Electromechanical Works
              </Typography>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#3498db",
                fontSize: "1.4rem",
                borderBottom: "2px solid #3498db",
                pb: 1,
                display: "inline-block",
              }}
            >
              Contact Four Walls
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ mb: 1.5, color: "#ecf0f1", fontSize: "1.1rem", display: 'flex', alignItems: 'center' }}>
                <FaPhone style={{ marginRight: 8 }} /> 971 * *** ****
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5, color: "#ecf0f1", fontSize: "1.1rem", display: 'flex', alignItems: 'center' }}>
                <FaWhatsapp style={{ marginRight: 8, color: '#25D366' }} /> 971 ** *** ****
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5, color: "#ecf0f1", fontSize: "1.1rem", display: 'flex', alignItems: 'center' }}>
                <FaPhone style={{ marginRight: 8 }} /> 971 ** *** ****
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5, color: "#3498db", fontSize: "1.1rem", fontWeight: "500", display: 'flex', alignItems: 'center' }}>
                <FaEnvelope style={{ marginRight: 8 }} /> rashid@rshamstech.com
              </Typography>
              {/* <Typography variant="body1" sx={{ mb: 1.5, color: "#3498db", fontSize: "1.1rem", fontWeight: "500" }}>
                inquiries@4wallsgroup.com
              </Typography> */}
              <Typography variant="body1" sx={{ color: "#bdc3c7", fontSize: "1rem", mt: 2, display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ marginRight: 8 }} /> P.O. Box: ******, Dubai, UAE 
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Quote Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            p: 3,
            bgcolor: "rgba(52, 152, 219, 0.1)",
            borderRadius: "8px",
            border: "1px solid rgba(52, 152, 219, 0.3)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#ecf0f1",
              fontSize: "1.1rem",
            }}
          >
            Request a quote for your Infrastructure, Road Maintenance, Civil and Electromechanical projects in UAE. We are always happy to serve you!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyFooter;