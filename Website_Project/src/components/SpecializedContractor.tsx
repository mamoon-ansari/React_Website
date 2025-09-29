import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { useTheme } from "@mui/material/styles";

const SpecializedContractor: React.FC = () => {
//   const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#003366",
        color: "white",
        py: 8,
        px: 4,
        textAlign: "center",
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        SPECIALIZED ROAD & INFRASTRUCTURE CONTRACTOR IN UAE
      </Typography>

      {/* Welcome Text */}
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "1.75rem", md: "2.5rem" },
        }}
      >
        WELCOME TO RASHID SHAMS TECHNICAL SERVICES LLC
      </Typography>

      {/* Number 66 - Assuming this is part of the design */}
      {/* <Typography
        variant="h1"
        component="div"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "3rem", md: "4rem" },
          mb: 3,
          color: "secondary.main",
        }}
      >
        66
      </Typography> */}

      {/* Motto */}
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontStyle: "italic",
          mb: 4,
          fontSize: { xs: "1.1rem", md: "1.5rem" },
        }}
      >
        "Quality Technical Solutions is Our Motto"
      </Typography>

      {/* Description */}
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.6,
          }}
        >
          RASHID SHAMS TECHNICAL SERVICES LLC is one of the reputed companies in the field of Infrastructure & Road Maintenance and technical resource provider for the commercial, industrial and residential projects. We aim to cater cost effective solutions and services to meet the needs of the clients. We are committed to complete the project on time and to the satisfaction of client.
        </Typography>

        {/* Guarantee Text */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
          }}
        >
          We Provide the Guaranteed Quality
        </Typography>
      </Box>
    </Box>
  );
};

export default SpecializedContractor;