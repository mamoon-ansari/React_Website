import React from "react";
import { Box, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center">
        Learn more about our mission and vision.
      </Typography>
    </Box>
  );
};

export default About;
