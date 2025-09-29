import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Placeholder images - replace with your actual project images
const projectImages = [
  { id: 1, title: "Road Infrastructure Project", image: "/images/project1.jpg" },
  { id: 2, title: "Civil Works Project", image: "/images/project2.jpg" },
  { id: 3, title: "Utility Works", image: "/images/project3.jpg" },
  { id: 4, title: "Pavement Works", image: "/images/project4.jpg" },
  { id: 5, title: "Electromechanical Project", image: "/images/project5.jpg" },
  { id: 6, title: "Infrastructure Development", image: "/images/project6.jpg" },
  { id: 7, title: "Road Maintenance", image: "/images/project7.jpg" },
  { id: 8, title: "Construction Project", image: "/images/project8.jpg" },
];

const ProjectsGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollLeft = direction === 'right' 
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
        
        if (isAtEnd) {
          // If at end, scroll back to start
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scroll('right');
        }
      }
    }, 3000); // Scroll every 3 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft + container.clientWidth < container.scrollWidth - 10
      );
    }
  };

  useEffect(() => {
    startAutoScroll();
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      container.addEventListener('mouseenter', stopAutoScroll);
      container.addEventListener('mouseleave', startAutoScroll);
    }

    return () => {
      stopAutoScroll();
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
        container.removeEventListener('mouseenter', stopAutoScroll);
        container.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "white",
        py: 8,
        px: 4,
        position: "relative",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#1a3a8f",
              fontSize: { xs: "2.5rem", md: "3rem" },
              textTransform: "uppercase",
            }}
          >
            Projects Gallery
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: "#2c3e50",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            FOUR WALLS TECHNICAL SERVICES CONTRACTING LLC has extensive knowledge of Infrastructure & Road Maintenance Works and the successful delivery of countless complex and specialized projects in UAE.
          </Typography>
        </Box>

        {/* Scrollable Gallery Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          {/* Left Scroll Button */}
          {showLeftButton && (
            <IconButton
              onClick={() => scroll('left')}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                zIndex: 10,
                '&:hover': {
                  bgcolor: "grey.100",
                },
                width: 48,
                height: 48,
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          {/* Right Scroll Button */}
          {showRightButton && (
            <IconButton
              onClick={() => scroll('right')}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                zIndex: 10,
                '&:hover': {
                  bgcolor: "grey.100",
                },
                width: 48,
                height: 48,
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}

          {/* Horizontal Scroll Container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 3,
              py: 2,
              px: 1,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge
              },
              scrollBehavior: "smooth",
              "&:hover": {
                "&::-webkit-scrollbar": {
                  display: "block",
                  height: 8,
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#c1c1c1",
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#a8a8a8",
                },
              },
            }}
          >
            {projectImages.map((project) => (
              <Box
                key={project.id}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "280px", sm: "320px", md: "350px" },
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  },
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    height: "250px",
                    bgcolor: "grey.300",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.2)",
                      transition: "backgroundColor 0.3s ease",
                    },
                    "&:hover::before": {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  }}
                />
                
                {/* Project Title */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "white",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#2c3e50",
                      fontSize: "1rem",
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* View More Button */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              display: "inline-block",
              bgcolor: "#1a3a8f",
              color: "white",
              px: 4,
              py: 2,
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              '&:hover': {
                bgcolor: "#2a4ba0",
              },
            }}
          >
            View More Projects
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsGallery;