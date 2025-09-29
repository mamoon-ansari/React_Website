import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        borderBottom: "1px solid rgba(52, 152, 219, 0.3)",
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ 
            flexGrow: 1, 
            fontFamily: "monospace", 
            fontWeight: "bold",
            background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Rashid Shams Technical Services LLC
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "#ecf0f1",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "20px",
              transition: "all 0.3s ease-in-out",
              "&:hover": { 
                color: "#3498db",
                backgroundColor: "rgba(52, 152, 219, 0.1)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: "#ecf0f1",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "20px",
              transition: "all 0.3s ease-in-out",
              "&:hover": { 
                color: "#3498db",
                backgroundColor: "rgba(52, 152, 219, 0.1)",
                transform: "translateY(-1px)",
              },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: "#ecf0f1",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "20px",
              transition: "all 0.3s ease-in-out",
              "&:hover": { 
                color: "#3498db",
                backgroundColor: "rgba(52, 152, 219, 0.1)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Contact
          </Button>
          <Button
            component={Link}
            to="/quote"
            sx={{
              background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "20px",
              marginLeft: 1,
              boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
              transition: "all 0.3s ease-in-out",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
                background: "linear-gradient(45deg, #2980b9 0%, #3498db 100%)",
              },
            }}
          >
            Get Quote
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;