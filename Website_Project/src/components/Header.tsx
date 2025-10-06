import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Menu, 
  MenuItem,
  Fade 
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

const Header: React.FC = () => {
  const [aboutAnchor, setAboutAnchor] = useState<null | HTMLElement>(null);
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);

  const handleAboutMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAboutAnchor(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    setAboutAnchor(null);
  };

  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchor(null);
  };

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
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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

          {/* About Dropdown Menu */}
          <Box>
            <Button
              onClick={handleAboutMenuOpen}
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
              endIcon={<FaChevronDown size={14} />}
            >
              About
            </Button>
            <Menu
              anchorEl={aboutAnchor}
              open={Boolean(aboutAnchor)}
              onClose={handleAboutMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(52, 152, 219, 0.3)",
                  marginTop: "8px",
                  "& .MuiMenuItem-root": {
                    padding: "12px 20px",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(52, 152, 219, 0.2)",
                      color: "#3498db",
                    },
                    "&:not(:last-child)": {
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    },
                  },
                },
              }}
            >
              <MenuItem 
                component={Link} 
                to="/about/company-profile" 
                onClick={handleAboutMenuClose}
              >
                Company Profile
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/about/directors-message" 
                onClick={handleAboutMenuClose}
              >
                Director's Message
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/about/organization-chart" 
                onClick={handleAboutMenuClose}
              >
                Organization Chart
              </MenuItem>
            </Menu>
          </Box>

          {/* Services Dropdown Menu */}
          <Box>
            <Button
              onClick={handleServicesMenuOpen}
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
              endIcon={<FaChevronDown size={14} />}
            >
              Services
            </Button>
            <Menu
              anchorEl={servicesAnchor}
              open={Boolean(servicesAnchor)}
              onClose={handleServicesMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(52, 152, 219, 0.3)",
                  marginTop: "8px",
                  "& .MuiMenuItem-root": {
                    padding: "12px 20px",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(52, 152, 219, 0.2)",
                      color: "#3498db",
                    },
                    "&:not(:last-child)": {
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    },
                  },
                },
              }}
            >
              <MenuItem 
                component={Link} 
                to="/services/infrastructure" 
                onClick={handleServicesMenuClose}
              >
                Infrastructure Works
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/services/road-works" 
                onClick={handleServicesMenuClose}
              >
                Road Works
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/services/civil-works" 
                onClick={handleServicesMenuClose}
              >
                Civil Works
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/services/electromechanical" 
                onClick={handleServicesMenuClose}
              >
                Electromechanical Works
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/services/fabrication-works" 
                onClick={handleServicesMenuClose}
              >
                Fabrication Works
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/services/prebuilt-cabins" 
                onClick={handleServicesMenuClose}
              >
                Prebuilt Cabins
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/services/hvac-services" 
                onClick={handleServicesMenuClose}
              >
                HVAC Services
              </MenuItem>
            </Menu>
          </Box>

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
            to="/contact"
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