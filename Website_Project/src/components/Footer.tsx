import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "#ecf0f1",
        textAlign: "center",
        py: 3,
        width: "100%",
        borderTop: "1px solid rgba(52, 152, 219, 0.3)",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography 
        variant="body1"
        sx={{
          fontSize: "1rem",
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
      >
        © {new Date().getFullYear()} Rashid Shams Technical Services LLC. All rights reserved.
      </Typography>
      <Typography 
        variant="body2"
        sx={{
          color: "#bdc3c7",
          fontSize: "0.9rem",
          mt: 1,
          opacity: 0.8,
        }}
      >
        Specialized in Infrastructure, Road Maintenance, Civil & Electromechanical Works
      </Typography>
    </Box>
  );
};

export default Footer;