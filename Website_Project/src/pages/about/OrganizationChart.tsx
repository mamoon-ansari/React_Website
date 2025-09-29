import React from "react";
import { Box, Typography, Container } from "@mui/material";

const OrganizationChart: React.FC = () => {
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
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#3498db",
            textAlign: "center",
          }}
        >
          Organization Chart
        </Typography>
        <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.8 }}>
          Organization chart content goes here...
        </Typography>
      </Container>
    </Box>
  );
};

export default OrganizationChart;