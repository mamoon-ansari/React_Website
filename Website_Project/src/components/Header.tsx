import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontFamily: "monospace", fontWeight: "bold" }}
        >
          Welcome to Rashid Shams Technical Services LLC
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              fontSize: "1rem",
              "&:hover": { color: "gray.300" },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: "white",
              fontSize: "1em",
              "&:hover": { color: "gray.300" },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: "white",
              fontSize: "1rem",
              "&:hover": { color: "gray.300" },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
