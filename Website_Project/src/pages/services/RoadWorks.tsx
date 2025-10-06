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
  FaRoad, 
  FaHardHat, 
  FaTrafficLight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaCogs,
  FaCar,
  FaMapMarkerAlt
} from "react-icons/fa";

const RoadWorks: React.FC = () => {
  const services = [
    {
      icon: <FaRoad size={30} />,
      title: "ROAD CONSTRUCTION",
      items: [
        "Asphalt paving and laying",
        "Road base construction",
        "Sub-grade preparation",
        "Road marking and signage",
        "Shoulder construction",
        "Pavement construction"
      ]
    },
    {
      icon: <FaHardHat size={30} />,
      title: "ROAD MAINTENANCE",
      items: [
        "Pothole repairs and patching",
        "Road resurfacing",
        "Crack sealing",
        "Surface dressing",
        "Routine maintenance",
        "Preventive maintenance"
      ]
    },
    {
      icon: <FaCogs size={30} />,
      title: "ROAD REHABILITATION",
      items: [
        "Complete road reconstruction",
        "Drainage improvement",
        "Shoulder reconstruction",
        "Utility adjustments",
        "Road widening",
        "Geometric improvements"
      ]
    },
    {
      icon: <FaTrafficLight size={30} />,
      title: "TRAFFIC MANAGEMENT",
      items: [
        "Temporary traffic control",
        "Road closure management",
        "Traffic diversion planning",
        "Safety barrier installation",
        "Traffic signage",
        "Road safety measures"
      ]
    }
  ];

  const features = [
    {
      title: "Quality Materials",
      description: "Using premium asphalt and construction materials"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art road construction machinery"
    },
    {
      title: "Expert Team",
      description: "Skilled engineers and road construction specialists"
    },
    {
      title: "Quick Completion",
      description: "Efficient project execution with minimal disruption"
    }
  ];

  const roadTypes = [
    {
      title: "Highways",
      description: "Major highways and expressways construction"
    },
    {
      title: "Urban Roads",
      description: "City roads and municipal street works"
    },
    {
      title: "Residential Roads",
      description: "Community and residential area roads"
    },
    {
      title: "Industrial Roads",
      description: "Factory access roads and industrial zones"
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
            ROAD WORKS
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
            COMPREHENSIVE ROAD CONSTRUCTION & MAINTENANCE
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
            Professional road construction, maintenance, and rehabilitation services for highways, 
            urban roads, and residential areas across UAE with focus on quality and durability.
          </Typography>
        </Box>

        {/* Services Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
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
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#3498db",
                        fontSize: "1.3rem",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  
                  <List dense>
                    {service.items.map((item, itemIndex) => (
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

        {/* Features Section */}
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
            Our Road Works Expertise
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
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
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="#ecf0f1">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Road Types Section */}
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
            Types of Roads We Build
          </Typography>
          <Grid container spacing={3}>
            {roadTypes.map((road, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
                    color: "white",
                    borderRadius: "12px",
                    boxShadow: "0 8px 32px rgba(52, 152, 219, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    height: "100%",
                    textAlign: "center",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px rgba(52, 152, 219, 0.5)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      {road.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                      {road.description}
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
            Why Choose Our Road Works Services?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaShieldAlt size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Safety Standards
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Strict adherence to road safety standards and traffic management protocols.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaCar size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Minimal Disruption
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Efficient planning to minimize traffic disruption during construction.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaMapMarkerAlt size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  UAE-Wide Service
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Serving all emirates with local expertise and understanding.
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
            Professional Road Works Services
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
            Contact us for all your road construction, maintenance, and rehabilitation needs in Dubai and across UAE.
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

export default RoadWorks;