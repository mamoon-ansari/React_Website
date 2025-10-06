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
  FaIndustry, 
  FaBuilding, 
  FaHome,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaTools,
  FaCogs,
  FaHammer
} from "react-icons/fa";

const FabricationWorks: React.FC = () => {
  const services = [
    {
      icon: <FaBuilding size={30} />,
      title: "CONSTRUCTION FABRICATION",
      items: [
        "Steel Structures (Beams, Columns, Trusses)",
        "MS Railings, Staircases, Grills",
        "Roofing Frameworks & Support Systems",
        "Gates, Doors, Window Frames",
        "Canopies & Pergolas",
        "Structural Steel Fabrication"
      ]
    },
    {
      icon: <FaHome size={30} />,
      title: "ARCHITECTURAL & INTERIOR",
      items: [
        "SS Handrails & Balustrades",
        "Decorative Metal Panels & Screens",
        "Metal Frames for Furniture",
        "False Ceiling Support Structures",
        "Custom Metal Artwork",
        "Architectural Metalwork"
      ]
    },
    {
      icon: <FaIndustry size={30} />,
      title: "INDUSTRIAL FABRICATION",
      items: [
        "Machine Frames & Housings",
        "Storage Racks & Platforms",
        "Piping & Flange Fabrication",
        "Tanks, Silos, & Vessels",
        "Conveyor Frames & Systems",
        "Industrial Equipment Fabrication"
      ]
    },
    {
      icon: <FaTools size={30} />,
      title: "SPECIALIZED FABRICATION",
      items: [
        "Custom Metal Fabrication",
        "Precision Metal Works",
        "Metal Joinery & Connections",
        "Fabrication for MEP Systems",
        "Special Project Fabrication",
        "Prototype Development"
      ]
    }
  ];

  const features = [
    {
      title: "Precision Engineering",
      description: "Advanced fabrication techniques with strict quality control"
    },
    {
      title: "Quality Materials",
      description: "Certified MS, SS, and specialized alloys for durability"
    },
    {
      title: "Custom Solutions",
      description: "Tailored fabrication for specific project requirements"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art fabrication machinery and tools"
    }
  ];

  const fabricationTypes = [
    {
      title: "Structural Steel",
      description: "Beams, columns, trusses and structural elements"
    },
    {
      title: "Architectural Metal",
      description: "Decorative and functional architectural elements"
    },
    {
      title: "Industrial Equipment",
      description: "Machinery frames and industrial components"
    },
    {
      title: "Custom Fabrication",
      description: "Bespoke metalwork for unique requirements"
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
            FABRICATION WORKS
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
            COMPREHENSIVE METAL FABRICATION SOLUTIONS
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
            Professional metal fabrication services including structural steel, architectural metalwork, 
            industrial equipment, and custom fabrication solutions across UAE with precision and quality.
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
            Our Fabrication Expertise
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

        {/* Fabrication Types Section */}
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
            Types of Fabrication We Specialize In
          </Typography>
          <Grid container spacing={3}>
            {fabricationTypes.map((type, index) => (
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
                      {type.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                      {type.description}
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
            Why Choose Our Fabrication Services?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaShieldAlt size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Quality Assurance
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Strict quality control and adherence to international standards for all fabrication works.
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
                  Modern fabrication equipment and techniques for precision and efficiency.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <FaHammer size={40} color="#3498db" style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ color: "#3498db", mb: 2 }}>
                  Expert Craftsmanship
                </Typography>
                <Typography variant="body1" color="#ecf0f1">
                  Skilled fabricators with years of experience in metalworking and fabrication.
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
            Professional Fabrication Services
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
            Contact us for all your metal fabrication needs in Dubai and across UAE. 
            From construction to industrial applications, we deliver quality and precision.
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

export default FabricationWorks;