import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTools, FaRoad, FaBuilding, FaBolt } from "react-icons/fa";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  color: "white",
  borderRadius: "16px",
  padding: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  height: "100%",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1.5, 0),
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingLeft: theme.spacing(1),
    borderLeft: "3px solid #3498db",
  },
  "&:last-child": {
    borderBottom: "none",
  },
}));

const ServiceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1.5, 0),
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingLeft: theme.spacing(1),
    borderLeft: "3px solid #3498db",
  },
  "&:last-child": {
    borderBottom: "none",
  },
}));

const IconWrapper = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "12px",
  flexShrink: 0,
});

const CompanyFooter: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1a252f",
        color: "white",
        py: 8,
        px: 4,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#3498db",
              fontSize: { xs: "2.5rem", md: "3rem" },
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            RASHID SHAMS
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#ecf0f1",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
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
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            Specialized in Infrastructure Works, Road Maintenance Works, Underground Utility Works, 
            Pavement Works, Civil Works and Electromechanical Works in Dubai, UAE
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Core Services Card */}
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.2)" }}>
                    <FaTools size={20} color="#3498db" />
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#3498db",
                      fontSize: "1.4rem",
                    }}
                  >
                    Our Core Services
                  </Typography>
                </Box>

                <Box>
                  <ServiceItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaBuilding size={16} color="#3498db" />
                    </IconWrapper>
                    <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                      Infrastructure Works
                    </Typography>
                  </ServiceItem>

                  <ServiceItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaRoad size={16} color="#3498db" />
                    </IconWrapper>
                    <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                      Road Works
                    </Typography>
                  </ServiceItem>

                  <ServiceItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaBuilding size={16} color="#3498db" />
                    </IconWrapper>
                    <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                      Civil Works
                    </Typography>
                  </ServiceItem>

                  <ServiceItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaBolt size={16} color="#3498db" />
                    </IconWrapper>
                    <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                      Electromechanical Works
                    </Typography>
                  </ServiceItem>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Contact Information Card */}
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.2)" }}>
                    <FaEnvelope size={18} color="#3498db" />
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#3498db",
                      fontSize: "1.4rem",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Box>

                <Box>
                  <ContactItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaPhone size={16} color="#3498db" />
                    </IconWrapper>
                    <Box>
                      <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                        971 * *** ****
                      </Typography>
                    </Box>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaWhatsapp size={16} color="#25D366" />
                    </IconWrapper>
                    <Box>
                      <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                        971 ** *** ****
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#bdc3c7", fontSize: "0.8rem" }}>
                        WhatsApp Available
                      </Typography>
                    </Box>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaPhone size={16} color="#3498db" />
                    </IconWrapper>
                    <Box>
                      <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                        971 ** *** ****
                      </Typography>
                    </Box>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaEnvelope size={16} color="#3498db" />
                    </IconWrapper>
                    <Box>
                      <Typography variant="body1" sx={{ color: "#3498db", fontSize: "1rem", fontWeight: "500" }}>
                        rashid@rshamstech.com
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#bdc3c7", fontSize: "0.8rem" }}>
                        Primary Email
                      </Typography>
                    </Box>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper sx={{ bgcolor: "rgba(52, 152, 219, 0.1)" }}>
                      <FaMapMarkerAlt size={16} color="#3498db" />
                    </IconWrapper>
                    <Box>
                      <Typography variant="body1" sx={{ color: "#ecf0f1", fontSize: "1rem", fontWeight: "500" }}>
                        P.O. Box: ******, Dubai, UAE
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#bdc3c7", fontSize: "0.8rem" }}>
                        Business Location
                      </Typography>
                    </Box>
                  </ContactItem>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        {/* Quote Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            p: 4,
            background: "linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(41, 128, 185, 0.15) 100%)",
            borderRadius: "16px",
            border: "1px solid rgba(52, 152, 219, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#3498db",
              fontSize: "1.3rem",
            }}
          >
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#ecf0f1",
              fontSize: "1.1rem",
              mb: 3,
            }}
          >
            Request a quote for your Infrastructure, Road Maintenance, Civil and Electromechanical projects in UAE. 
            We are always happy to serve you!
          </Typography>
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
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
              },
            }}
          >
            Get Free Quote
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 4, pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <Typography variant="body2" sx={{ color: "#bdc3c7", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Rashid Shams Technical Services LLC. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyFooter;