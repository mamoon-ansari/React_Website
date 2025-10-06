import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon
} from "@mui/material";
import { 
  FaTools, 
  FaWrench, 
  FaCog,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaSnowflake,
  FaFan
} from "react-icons/fa";

const HVACServices: React.FC = () => {
  const serviceCategories = [
    {
      icon: <FaCog size={30} />,
      title: "INSTALLATION SERVICES",
      items: [
        "Centralized HVAC System Setup",
        "Split & Ductable AC Installation",
        "VRV/VRF System Installation",
        "Chiller Plant Installation",
        "Ducting & Piping Works",
        "Exhaust & Ventilation System Setup",
        "Air Handling Units (AHU) & Fan Coil Units (FCU) Installation"
      ]
    },
    {
      icon: <FaWrench size={30} />,
      title: "REPAIR & BREAKDOWN SERVICES",
      items: [
        "AC Compressor Repair",
        "Gas Leak Detection & Recharging",
        "Motor & Fan Repair",
        "Thermostat Troubleshooting",
        "Duct Repair & Re-insulation",
        "Noise & Vibration Issue Resolution"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Maintenance Contracts",
      description: "Regular preventive maintenance to ensure optimal performance"
    },
    {
      title: "Energy Efficiency Audit",
      description: "Optimize your HVAC system for better energy consumption"
    },
    {
      title: "System Upgrades",
      description: "Upgrade existing systems with latest technology"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency repair services for critical situations"
    }
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
        minHeight: "100vh",
        pt: 12,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#3498db",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            HVAC SERVICES
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
              borderRadius: "2px",
              mx: "auto",
              mb: 4,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#ecf0f1",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            OUR COMPLETE RANGE OF HVAC WORKS INCLUDE
          </Typography>
        </Box>

        {/* Main Services Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {serviceCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  height: "100%",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 40px rgba(52, 152, 219, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "rgba(52, 152, 219, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#3498db",
                        fontSize: "1.3rem",
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  
                  <List dense>
                    {category.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                          <FaCheckCircle size={16} color="#3498db" />
                        </ListItemIcon>
                        <Typography 
                          variant="body1" 
                          color="#ecf0f1"
                          sx={{ fontSize: "0.95rem" }}
                        >
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Services Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 4,
              color: "#3498db",
              textAlign: "center",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Additional Services
          </Typography>
          <Grid container spacing={3}>
            {additionalServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    background: "rgba(52, 152, 219, 0.1)",
                    color: "white",
                    borderRadius: "12px",
                    border: "1px solid rgba(52, 152, 219, 0.3)",
                    height: "100%",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 25px rgba(52, 152, 219, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "#3498db",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="#ecf0f1">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 4,
              color: "#3498db",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Why Choose Our HVAC Services?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaSnowflake size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Expert Technicians
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Certified professionals with extensive experience in all HVAC systems.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaFan size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Quality Parts
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Genuine parts and components from leading manufacturers.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaTools size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Quick Response
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Fast response times for installations, repairs, and emergencies.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            p: 6,
            background: "rgba(52, 152, 219, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(52, 152, 219, 0.3)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#3498db",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Professional HVAC Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ecf0f1",
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Contact us for all your heating, ventilation, and air conditioning needs in Dubai and across UAE.
          </Typography>
          
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button
              component="a"
              href="tel:+971*********"
              startIcon={<FaPhone />}
              sx={{
                background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "25px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
                },
              }}
            >
              +971 ** *** ****
            </Button>
            
            <Button
              component="a"
              href="mailto:rashid@rshamstech.com"
              startIcon={<FaEnvelope />}
              sx={{
                background: "linear-gradient(45deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "25px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                border: "1px solid rgba(52, 152, 219, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
                },
              }}
            >
              rashid@rshamstech.com
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HVACServices;