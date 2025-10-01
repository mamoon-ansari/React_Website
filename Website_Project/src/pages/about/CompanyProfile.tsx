import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { FaEye, FaBullseye, FaHandshake, FaUsers } from "react-icons/fa";

const CompanyProfile: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
        minHeight: "calc(100vh - 128px)",
        py: 8,
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
            Company Profile
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
        </Box>

        {/* Company Description */}
        <Card
          sx={{
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
            color: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(52, 152, 219, 0.3)",
            mb: 6,
            p: 4,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#3498db",
                textAlign: "center",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              RASHID SHAMS TECHNICAL SERVICES LLC
            </Typography>
            <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.8, mb: 3, fontSize: "1.1rem" }}>
              RASHID SHAMS TECHNICAL SERVICES LLC is one of the reputed companies in the field of Infrastructure & Road Maintenance Works & technical resource provider for the commercial, industrial & residential projects. We aim to cater cost effective solutions & services to meet the needs of the clients. We are committed to complete the project on time and to the satisfaction of client.
            </Typography>
            <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.8, mb: 3, fontSize: "1.1rem" }}>
              At the core of our project delivery is technical excellence, utilizing the latest methods, innovations and technology to ensure we offer the best value for our clients.
            </Typography>
            <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.8, fontSize: "1.1rem" }}>
              Our wide range of operations mean we can undertake diverse and specialized projects and our focus on quality work delivered to client. We support you with the right technical and construction services that get you the best results. Our highly motivated and experienced workforce is well-trained to actively involved in planning, technical, construct and maintain projects.
            </Typography>
          </CardContent>
        </Card>

        {/* Vision, Mission, Values & Commitment Cards */}
        <Grid container spacing={4}>
          {/* Vision Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(52, 152, 219, 0.3)",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaEye size={30} color="white" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#3498db",
                    fontSize: "1.5rem",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.7, fontSize: "1rem" }}>
                  To grow as a reputed technical contracting company and provider of quality construction and engineering services in UAE
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Mission Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(52, 152, 219, 0.3)",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #e74c3c 0%, #c0392b 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaBullseye size={30} color="white" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#e74c3c",
                    fontSize: "1.5rem",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.7, fontSize: "1rem" }}>
                  Our mission is to provide best quality technical services and We are committed to complete the project by maintaining the sophisticated quality, on time and ensure client satisfaction
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Values Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(52, 152, 219, 0.3)",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #2ecc71 0%, #27ae60 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaHandshake size={30} color="white" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#2ecc71",
                    fontSize: "1.5rem",
                  }}
                >
                  Our Values
                </Typography>
                <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.7, fontSize: "1rem" }}>
                  We believe in transparency, commitment, reliability and long-term business relationship based on mutual trust
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Project Commitment Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(52, 152, 219, 0.3)",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #f39c12 0%, #e67e22 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaUsers size={30} color="white" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#f39c12",
                    fontSize: "1.5rem",
                  }}
                >
                  Project Commitment
                </Typography>
                <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.7, fontSize: "1rem" }}>
                  We are qualified Contractors have professional and experienced team of Engineers, Staff and Workforce. We always recruit our employees based on our core values: be innovative, be specialists, be focused and be committed. We operate a culture of teamwork, sincerity and support, in which everyone is encouraged to strive for excellence.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            p: 4,
            background: "rgba(52, 152, 219, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(52, 152, 219, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#3498db",
            }}
          >
            Ready to Work With Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ecf0f1",
              mb: 3,
              fontSize: "1.1rem",
            }}
          >
            Partner with Rashid Shams Technical Services LLC for your next infrastructure, road maintenance, civil, or electromechanical project.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyProfile;