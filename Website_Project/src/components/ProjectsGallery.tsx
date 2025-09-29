import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Placeholder images - replace with your actual project images
const projectImages = [
  { id: 1, title: "Road Infrastructure Project", image: "/assets/roadinfrawork.jpg" },
  { id: 2, title: "Civil Works Project", image: "/assets/civilwork.jpg" },
  { id: 3, title: "Utility Works", image: "/assets/utilitywork.jpg" },
  { id: 4, title: "Pavement Works", image: "/assets/pavementwork.jpg" },
  { id: 5, title: "Electromechanical Project", image: "/assets/electromechanicalwork.jpg" },
  { id: 6, title: "Infrastructure Development", image: "/assets/infrawork2.jpg" },
  { id: 7, title: "Road Maintenance", image: "/assets/roadwork.jpg" },
  { id: 8, title: "Construction Project", image: "/assets/constructionwork.jpg" },
];

const ProjectsGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
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
              color: "#3498db",
              fontSize: { xs: "2.5rem", md: "3rem" },
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Projects Gallery
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: "#ecf0f1",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            RASHID SHAMS TECHNICAL SERVICES LLC has extensive knowledge of Infrastructure & Road Maintenance Works and the successful delivery of complex and specialized projects in UAE.
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
                bgcolor: "#3498db",
                color: "white",
                boxShadow: "0 4px 12px rgba(52, 152, 219, 0.4)",
                zIndex: 10,
                '&:hover': {
                  bgcolor: "#2980b9",
                  transform: "translateY(-50%) scale(1.1)",
                },
                width: 48,
                height: 48,
                transition: "all 0.3s ease-in-out",
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
                bgcolor: "#3498db",
                color: "white",
                boxShadow: "0 4px 12px rgba(52, 152, 219, 0.4)",
                zIndex: 10,
                '&:hover': {
                  bgcolor: "#2980b9",
                  transform: "translateY(-50%) scale(1.1)",
                },
                width: 48,
                height: 48,
                transition: "all 0.3s ease-in-out",
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
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(52, 152, 219, 0.6)",
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "rgba(52, 152, 219, 0.8)",
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
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(52, 152, 219, 0.3)",
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
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
                      transition: "opacity 0.3s ease",
                      opacity: 0,
                    },
                    "&:hover::before": {
                      opacity: 1,
                    },
                  }}
                />
                
                {/* Project Title */}
                <Box
                  sx={{
                    p: 3,
                    textAlign: "center",
                    background: "rgba(52, 152, 219, 0.1)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#ecf0f1",
                      fontSize: "1.1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
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
          <Box
            component="button"
            sx={{
              background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
              color: "white",
              border: "none",
              padding: "12px 32px",
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
              },
            }}
          >
            View More Projects
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsGallery;