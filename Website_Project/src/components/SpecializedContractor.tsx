import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

const SpecializedContractor: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
        py: 8,
        px: 4,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(52, 152, 219, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(41, 128, 185, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(26, 82, 118, 0.05) 0%, transparent 50%)
          `,
          zIndex: 1,
        }}
      />

      <Box sx={{ maxWidth: "1000px", mx: "auto", position: "relative", zIndex: 2 }}>
        {/* Main Heading */}
        <Box
          sx={{
            display: "inline-block",
            background: "rgba(52, 152, 219, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(52, 152, 219, 0.3)",
            px: 4,
            py: 2,
            borderRadius: "25px",
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#3498db",
            }}
          >
            SPECIALIZED ROAD & INFRASTRUCTURE CONTRACTOR IN UAE
          </Typography>
        </Box>

        {/* Welcome Text */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "1.8rem", md: "2.8rem" },
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#ecf0f1",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          WELCOME TO RASHID SHAMS TECHNICAL SERVICES LLC
        </Typography>

        {/* Motto */}
        <Box
          sx={{
            background: "linear-gradient(45deg, rgba(52, 152, 219, 0.15) 0%, rgba(41, 128, 185, 0.15) 100%)",
            border: "1px solid rgba(52, 152, 219, 0.2)",
            borderRadius: "16px",
            p: 3,
            mb: 4,
            display: "inline-block",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#3498db",
              fontWeight: "500",
            }}
          >
            "Quality Technical Solutions is Our Motto"
          </Typography>
        </Box>

        {/* Description */}
        <Box 
          sx={{ 
            maxWidth: "800px", 
            mx: "auto",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            p: 4,
            mb: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.8,
              textAlign: "center",
              color: "#bdc3c7",
            }}
          >
            RASHID SHAMS TECHNICAL SERVICES LLC is one of the reputed companies in the field of Infrastructure & Road Maintenance and technical resource provider for the commercial, industrial and residential projects. We aim to cater cost effective solutions and services to meet the needs of the clients. We are committed to complete the project on time and to the satisfaction of client.
          </Typography>

          {/* Guarantee Text */}
          <Box
            sx={{
              display: "inline-block",
              background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
              px: 4,
              py: 2,
              borderRadius: "25px",
              boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              We Provide the Guaranteed Quality
            </Typography>
          </Box>
        </Box>

        {/* CTA Button */}
        <Box sx={{ mt: 4 }}>
          <Box
            component={Link}
            to="/contact"
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
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
              },
            }}
          >
            Get Started Today
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SpecializedContractor;