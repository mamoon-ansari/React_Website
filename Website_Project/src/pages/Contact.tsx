import React from "react";
import { Box, Typography } from "@mui/material";

const Contact: React.FC = () => {
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
        Contact Us
      </Typography>
      <Typography variant="body1" align="center">
        Get in touch with us for any inquiries.
      </Typography>
    </Box>
  );
};

export default Contact;
