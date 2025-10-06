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
  FaHome, 
  FaTruck, 
  FaShieldAlt,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCogs
} from "react-icons/fa";

const PrebuiltCabins: React.FC = () => {
  const features = [
    {
      icon: <FaHome size={30} />,
      title: "READY-TO-USE & QUICK INSTALLATION",
      items: [
        "Fully or partially built off-site",
        "Installs on-site within hours or days",
        "Minimal foundation required"
      ]
    },
    {
      icon: <FaTruck size={30} />,
      title: "PORTABLE & RELOCATABLE",
      items: [
        "Designed for easy shifting using crane",
        "Ideal for temporary or shifting work sites",
        "Quick deployment and relocation"
      ]
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "DURABLE & STRONG CONSTRUCTION",
      items: [
        "MS Frame with rust-proof treatment",
        "Weather-resistant external cladding",
        "Designed for wind, rain and moderate seismic loads"
      ]
    }
  ];

  const applications = [
    {
      title: "Site Offices",
      description: "Temporary office spaces for construction sites and projects"
    },
    {
      title: "Security Cabins",
      description: "Durable security checkpoints and guard houses"
    },
    {
      title: "Storage Units",
      description: "Secure storage solutions for tools and equipment"
    },
    {
      title: "Mobile Toilets",
      description: "Hygienic sanitation facilities for work sites"
    },
    {
      title: "Emergency Shelters",
      description: "Quick deployment shelters for emergency situations"
    },
    {
      title: "Retail Kiosks",
      description: "Portable retail spaces and information booths"
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
            PREBUILT CABINS
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
            OUR COMPLETE RANGE OF PREBUILT CABINS WORKS INCLUDE
          </Typography>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#3498db",
                        fontSize: "1.2rem",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  
                  <List dense>
                    {feature.items.map((item, itemIndex) => (
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

        {/* Applications Section */}
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
            Applications & Uses
          </Typography>
          <Grid container spacing={3}>
            {applications.map((app, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                      {app.title}
                    </Typography>
                    <Typography variant="body2" color="#ecf0f1">
                      {app.description}
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
            Key Benefits
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaClock size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Time Saving
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Reduce construction time by up to 70% with our prebuilt solutions.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaCogs size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Cost Effective
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Lower labor costs and minimal material waste compared to traditional construction.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaShieldAlt size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Quality Assured
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Factory-controlled environment ensures consistent quality and workmanship.
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
            Get Your Prebuilt Cabin Solution
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
            Contact us for quick, efficient, and durable prebuilt cabin solutions in Dubai and across UAE.
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

export default PrebuiltCabins;