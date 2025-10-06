import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Import React Router Link

interface InfoCardProps {
  title: string;
  image: string;
  items: string[];
  link: string;
  color?: string;
}

const StyledCard = styled(Card)(() => ({
  height: "600px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  },
}));

// Fixed height image container
const ImageContainer = styled(Box)({
  position: "relative",
  height: "200px", // Fixed height for all images
  width: "100%",
  overflow: "hidden",
});

const StyledCardMedia = styled(CardMedia)({
  height: "100%",
  width: "100%",
  objectFit: "cover", // This ensures images cover the container uniformly
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
});

const ServiceItem = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingLeft: theme.spacing(1),
    borderLeft: `3px solid rgba(255, 255, 255, 0.8)`,
  },
  "&:last-child": {
    borderBottom: "none",
  },
}));

// Styled React Router Link for Read More
const ReadMoreLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "0.9rem",
  padding: "8px 16px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    transform: "translateX(4px)",
    textDecoration: "none",
    color: "white",
  },
}));

export default function InfoCard({ title, image, items, link, color = "#1a3a8f" }: InfoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box 
      sx={{ 
        maxWidth: 360, 
        margin: "0 auto",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledCard>
        {/* Fixed Height Image Container */}
        <ImageContainer>
          <StyledCardMedia
            image={image}
            title={title}
          />
          <GradientOverlay className="gradient-overlay" />
          
          {/* Title Overlay on Image */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: `linear-gradient(45deg, ${color}CC, ${color}99)`,
              color: "white",
              padding: 2,
              transform: isHovered ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
          </Box>
        </ImageContainer>

        {/* Content Section */}
        <CardContent
          sx={{
            background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
            color: "white",
            padding: 3,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "300px", // Ensures consistent content area height
          }}
        >
          {/* Main Title (Hidden on hover) */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "center",
              opacity: isHovered ? 0 : 1,
              transition: "opacity 0.3s ease-in-out",
              fontSize: "1.1rem",
              minHeight: "24px", // Fixed height for title area
            }}
          >
            {title}
          </Typography>

          {/* Services List */}
          <Box
            sx={{
              flex: 1,
              overflow: "hidden",
              position: "relative",
              minHeight: "200px", // Fixed height for services list
            }}
          >
            <Box
              sx={{
                height: "100%",
                overflowY: "auto",
                pr: 1,
                "&::-webkit-scrollbar": {
                  width: 6,
                },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(255, 255, 255, 0.3)",
                  borderRadius: 3,
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              {items.map((item, idx) => (
                <ServiceItem
                  key={idx}
                  variant="body2"
                  sx={{
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  • {item}
                </ServiceItem>
              ))}
            </Box>
          </Box>

          {/* Read More Link */}
          <Box sx={{ textAlign: "center", mt: 2, minHeight: "40px" }}>
            <ReadMoreLink
              to={link} // Use React Router's 'to' prop instead of 'href'
              onClick={() => window.scrollTo(0, 0)} // Optional: scroll to top on click
            >
              Read More 
              <Box 
                component="span" 
                sx={{ 
                  ml: 1,
                  transition: "transform 0.3s ease-in-out",
                  transform: isHovered ? "translateX(4px)" : "translateX(0)"
                }}
              >
                →
              </Box>
            </ReadMoreLink>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
}