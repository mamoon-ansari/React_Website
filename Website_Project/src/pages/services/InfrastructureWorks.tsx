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
  FaWater, 
  FaTools, 
  FaLightbulb,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaCogs,
  FaBuilding,
} from "react-icons/fa";

const InfrastructureWorks: React.FC = () => {
  const services = [
    {
      icon: <FaWater size={30} />,
      title: "WATER NETWORKS",
      items: [
        "Irrigation Networks",
        "Water Supply Systems", 
        "Storm Water Networks",
        "Sewerage Networks",
        "Drainage Network",
        "Fire Hydrant Networks"
      ]
    },
    {
      icon: <FaTools size={30} />,
      title: "PIPE WORKS",
      items: [
        "GRE/GRPE/HDPE/UPVC Pipe Works",
        "Pipe Jacking Works",
        "Service Line Coring & Ditching",
        "Pipe Line Patching & Lamination",
        "Pipe Line Plugging & Rectification",
        "Pipeline Installation"
      ]
    },
    {
      icon: <FaBuilding size={30} />,
      title: "CONSTRUCTION WORKS",
      items: [
        "Construction of Manholes & Chambers",
        "Gullys & Soakaway Construction",
        "Retaining Walls",
        "Foundation Works",
        "Structural Support Systems",
        "Utility Chambers"
      ]
    },
    {
      icon: <FaLightbulb size={30} />,
      title: "PUBLIC INFRASTRUCTURE",
      items: [
        "Street Lighting Works",
        "Public Utility Installations",
        "Community Infrastructure",
        "Park Development",
        "Public Space Development",
        "Municipal Works"
      ]
    }
  ];

  const features = [
    {
      title: "Quality Materials",
      description: "Using certified and high-quality construction materials"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art infrastructure construction machinery"
    },
    {
      title: "Expert Team",
      description: "Skilled engineers and infrastructure specialists"
    },
    {
      title: "Timely Completion",
      description: "Efficient project management for on-time delivery"
    }
  ];

  const infrastructureTypes = [
    {
      title: "Water Systems",
      description: "Complete water supply and drainage systems"
    },
    {
      title: "Pipe Networks",
      description: "Comprehensive piping and utility networks"
    },
    {
      title: "Public Works",
      description: "Municipal and community infrastructure"
    },
    {
      title: "Support Structures",
      description: "Structural and foundation works"
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
            INFRASTRUCTURE WORKS
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
            COMPREHENSIVE INFRASTRUCTURE DEVELOPMENT SOLUTIONS
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
            Complete range of Infrastructure Works including Water Networks, Drainage Systems, 
            Pipe Works, and Public Infrastructure development across UAE with focus on quality and sustainability.
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
            Our Infrastructure Expertise
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

        {/* Infrastructure Types Section */}
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
            Types of Infrastructure We Build
          </Typography>
          <Grid container spacing={3}>
            {infrastructureTypes.map((infra, index) => (
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
                      {infra.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                      {infra.description}
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
            Why Choose Our Infrastructure Services?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaShieldAlt size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Quality Assurance
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Strict adherence to international quality standards and specifications.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaCogs size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Advanced Technology
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Modern construction techniques and equipment for superior infrastructure.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaBuilding size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Sustainable Solutions
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Environmentally conscious infrastructure development practices.
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
            Professional Infrastructure Services
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
            Contact us for all your infrastructure development needs including water networks, 
            drainage systems, pipe works, and public infrastructure across UAE.
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

export default InfrastructureWorks;