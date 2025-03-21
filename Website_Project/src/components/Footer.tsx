import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        py: 3,
        width: "100%",
        height: "64px",
      }}
    >
      <Typography variant="body1">
        © 2023 No Bugs Here, Just Features. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
