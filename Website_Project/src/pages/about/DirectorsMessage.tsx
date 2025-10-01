import React from "react";
import { Box, Typography, Container, Card, CardContent, Grid } from "@mui/material";
import { FaQuoteLeft, FaSignature } from "react-icons/fa";

const DirectorsMessage: React.FC = () => {
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
            Director's Message
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
            variant="h6"
            sx={{
              color: "#ecf0f1",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontStyle: "italic",
            }}
          >
            A Message from Our Leadership
          </Typography>
        </Box>

        {/* Main Message Card */}
        <Card
          sx={{
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
            color: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(52, 152, 219, 0.3)",
            mb: 6,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Quote Icon */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              opacity: 0.1,
            }}
          >
            <FaQuoteLeft size={80} color="#3498db" />
          </Box>

          <CardContent sx={{ p: { xs: 3, md: 6 }, position: "relative" }}>
            {/* Introduction */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 4,
                color: "#3498db",
                textAlign: "center",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
              }}
            >
              Greetings from Rashid Shams Technical Services LLC
            </Typography>

            {/* Message Content */}
            <Box sx={{ lineHeight: 1.8 }}>
              <Typography variant="body1" sx={{ color: "#ecf0f1", mb: 3, fontSize: "1.1rem", textAlign: "justify" }}>
                The Company <strong>RASHID SHAMS TECHNICAL SERVICES LLC</strong> has grown from a professional technical support company to a multidimensional enterprise with specialized capability right up to the quality outputs. 
              </Typography>

              <Typography variant="body1" sx={{ color: "#ecf0f1", mb: 3, fontSize: "1.1rem", textAlign: "justify" }}>
                <strong>RASHID SHAMS TECHNICAL SERVICES LLC</strong> takes pride in being the leading vendor of technical contracting services and wants to humbly thank all its workforce, suppliers and clients, who trusted us, sufficient to make this possible.
              </Typography>

              <Typography variant="body1" sx={{ color: "#ecf0f1", mb: 3, fontSize: "1.1rem", textAlign: "justify" }}>
                We firmly believe that customer satisfaction is our core aim and our orientation towards customer satisfaction coupled with value based business ethics and commitment to quality, has secured major position in the industry.
              </Typography>

              <Typography variant="body1" sx={{ color: "#ecf0f1", mb: 3, fontSize: "1.1rem", textAlign: "justify" }}>
                Being a completely unified service provider, we are able to offer our client as all the technical and contracting services they require under one roof, from Simple small infrastructure to major specialized technical works.
              </Typography>

              <Typography variant="body1" sx={{ color: "#ecf0f1", mb: 4, fontSize: "1.1rem", textAlign: "justify" }}>
                We assure you of our best services as always and we will endeavor utmost to implement your suggestion. Kindly feel free to contact us at any time for your inquiries and feedback. We are happy to serve always best.
              </Typography>
            </Box>

            {/* Signature Section */}
            <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#3498db",
                    fontSize: "1.3rem",
                  }}
                >
                  Best Regards,
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mb: 2 }}>
                  <FaSignature size={20} color="#3498db" style={{ marginRight: "10px" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#ecf0f1",
                      fontSize: "1.4rem",
                    }}
                  >
                    Managing Director
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#bdc3c7",
                    fontStyle: "italic",
                    fontSize: "1rem",
                  }}
                >
                  Rashid Shams Technical Services LLC
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Values Highlight Section */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "rgba(52, 152, 219, 0.1)",
                color: "white",
                borderRadius: "12px",
                border: "1px solid rgba(52, 152, 219, 0.2)",
                textAlign: "center",
                p: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: "#3498db", fontWeight: "bold", mb: 1 }}>
                Customer Focus
              </Typography>
              <Typography variant="body2" sx={{ color: "#ecf0f1" }}>
                Customer satisfaction is our core aim and driving force
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "rgba(52, 152, 219, 0.1)",
                color: "white",
                borderRadius: "12px",
                border: "1px solid rgba(52, 152, 219, 0.2)",
                textAlign: "center",
                p: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: "#3498db", fontWeight: "bold", mb: 1 }}>
                Quality Commitment
              </Typography>
              <Typography variant="body2" sx={{ color: "#ecf0f1" }}>
                Value-based business ethics and commitment to quality
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "rgba(52, 152, 219, 0.1)",
                color: "white",
                borderRadius: "12px",
                border: "1px solid rgba(52, 152, 219, 0.2)",
                textAlign: "center",
                p: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: "#3498db", fontWeight: "bold", mb: 1 }}>
                Unified Services
              </Typography>
              <Typography variant="body2" sx={{ color: "#ecf0f1" }}>
                Complete technical and contracting services under one roof
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
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
            Connect With Our Leadership
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ecf0f1",
              mb: 3,
              fontSize: "1.1rem",
            }}
          >
            We welcome your feedback and inquiries. Reach out to us to discuss how we can serve your technical and contracting needs.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DirectorsMessage;