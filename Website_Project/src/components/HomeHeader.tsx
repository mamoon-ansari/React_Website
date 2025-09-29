import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomeHeader: React.FC = () => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography
      variant="h2"
      sx={{
        fontWeight: "bold",
        mb: 3,
        color: "#3498db",
        fontSize: { xs: "2.2rem", md: "3rem" },
        textTransform: "uppercase",
        letterSpacing: "1px",
        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      }}
    >
      Welcome to Rashid Shams Technical Services LLC
    </Typography>

    <Typography
      variant="h6"
      sx={{
        color: "#ecf0f1",
        mb: 4,
        fontSize: { xs: "1rem", md: "1.3rem" },
        lineHeight: 1.6,
        maxWidth: "800px",
        mx: "auto",
        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
      }}
    >
      Specialized in Infrastructure Works, Road Maintenance Works,
      Underground Utility Works, Pavement Works, Civil Works and
      Electromechanical Works
    </Typography>

    {/* Decorative Element */}
    <Box
      sx={{
        width: "100px",
        height: "4px",
        background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
        borderRadius: "2px",
        mx: "auto",
        mb: 4,
        boxShadow: "0 2px 8px rgba(52, 152, 219, 0.3)",
      }}
    />
  </Box>
);

export default HomeHeader;