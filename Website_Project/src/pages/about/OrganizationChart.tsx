import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { FaUserTie, FaCog, FaChartLine, FaProjectDiagram, FaTools, FaShoppingCart } from "react-icons/fa";

const OrganizationChart: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
        minHeight: "calc(100vh - 128px)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#3498db",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Organization Chart
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
              borderRadius: "2px",
              mx: "auto",
              mb: 4,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#ecf0f1",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Our Organizational Structure and Leadership Hierarchy
          </Typography>
        </Box>

        {/* Organization Chart */}
        <Box sx={{ position: "relative" }}>
          {/* Level 1: General Manager */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <Card
              sx={{
                background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(52, 152, 219, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: { xs: "280px", md: "320px" },
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 40px rgba(52, 152, 219, 0.6)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <FaUserTie size={30} color="white" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  General Manager
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Vertical Line from General Manager to Horizontal Connector */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 0 }}>
            <Box
              sx={{
                width: "2px",
                height: "40px",
                background: "linear-gradient(to bottom, #3498db, #2980b9)",
              }}
            />
          </Box>

          {/* Horizontal Connecting Line for Level 2 */}
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              mb: 4,
              position: "relative",
              height: "2px",
              background: "linear-gradient(to right, #3498db, #2980b9)",
              mx: { xs: 2, md: 10 },
            }}
          />

          {/* Level 2: Admin, Finance, Operations Manager, Business Development */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            mb: 6, 
            flexWrap: "wrap", 
            gap: 3,
            position: "relative",
            alignItems: "flex-start", // Align all items to top
          }}>
            {/* Vertical lines from horizontal connector to each department */}
            <Box sx={{
              position: "absolute",
              top: "-42px",
              left: "12.5%",
              width: "2px",
              height: "40px",
              background: "linear-gradient(to bottom, #3498db, #2980b9)",
            }} />
            <Box sx={{
              position: "absolute",
              top: "-42px",
              left: "37.5%",
              width: "2px",
              height: "40px",
              background: "linear-gradient(to bottom, #3498db, #2980b9)",
            }} />
            <Box sx={{
              position: "absolute",
              top: "-42px",
              left: "62.5%",
              width: "2px",
              height: "40px",
              background: "linear-gradient(to bottom, #3498db, #2980b9)",
            }} />
            <Box sx={{
              position: "absolute",
              top: "-42px",
              left: "87.5%",
              width: "2px",
              height: "40px",
              background: "linear-gradient(to bottom, #3498db, #2980b9)",
            }} />

            {/* Admin with Purchase */}
            <Box sx={{ 
              flex: 1, 
              minWidth: "200px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              minHeight: "200px", // Fixed height container
            }}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(52, 152, 219, 0.3)",
                  width: "100%",
                  maxWidth: "180px",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 1,
                    }}
                  >
                    <FaCog size={20} color="#3498db" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Admin
                  </Typography>
                </CardContent>
              </Card>

              {/* Vertical line from Admin to Purchase */}
              <Box sx={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box
                  sx={{
                    width: "2px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #3498db, #2980b9)",
                  }}
                />
              </Box>

              {/* Purchase */}
              <Card
                sx={{
                  background: "rgba(52, 152, 219, 0.1)",
                  color: "white",
                  borderRadius: "8px",
                  border: "1px solid rgba(52, 152, 219, 0.2)",
                  width: "140px",
                  textAlign: "center",
                }}
              >
                <CardContent sx={{ p: 1.5 }}>
                  <FaShoppingCart size={16} color="#3498db" style={{ marginBottom: "4px" }} />
                  <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "0.8rem" }}>
                    Purchase
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Finance - Standalone with consistent height */}
            <Box sx={{ 
              flex: 1, 
              minWidth: "200px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              minHeight: "200px", // Fixed height container
              justifyContent: "flex-start",
            }}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(52, 152, 219, 0.3)",
                  width: "100%",
                  maxWidth: "180px",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 1,
                    }}
                  >
                    <FaChartLine size={20} color="#3498db" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Finance
                  </Typography>
                </CardContent>
              </Card>
              
              {/* Empty space to match height with other columns */}
              <Box sx={{ height: "78px", visibility: "hidden" }}>
                <Typography variant="body2">Spacer</Typography>
              </Box>
            </Box>

            {/* Operations Manager with Service Manager & Project Manager */}
            <Box sx={{ 
              flex: 1, 
              minWidth: "200px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              minHeight: "200px", // Fixed height container
            }}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(52, 152, 219, 0.3)",
                  width: "100%",
                  maxWidth: "180px",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 1,
                    }}
                  >
                    <FaUserTie size={20} color="#3498db" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Operations Manager
                  </Typography>
                </CardContent>
              </Card>

              {/* Vertical line from Operations Manager to Horizontal Connector */}
              <Box sx={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box
                  sx={{
                    width: "2px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #3498db, #2980b9)",
                  }}
                />
              </Box>

              {/* Horizontal line connecting Service Manager and Project Manager */}
              <Box 
                sx={{ 
                  width: "100%", 
                  height: "2px", 
                  background: "linear-gradient(to right, #3498db, #2980b9)",
                  mb: 2,
                  maxWidth: "300px",
                }} 
              />

              {/* Service Manager and Project Manager Container */}
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "300px", gap: 2 }}>
                {/* Service Manager with Teams */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  {/* Vertical line from horizontal to Service Manager */}
                  <Box sx={{ height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box
                      sx={{
                        width: "2px",
                        height: "100%",
                        background: "linear-gradient(to bottom, #3498db, #2980b9)",
                      }}
                    />
                  </Box>

                  <Card
                    sx={{
                      background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                      color: "white",
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      border: "1px solid rgba(52, 152, 219, 0.2)",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <CardContent sx={{ p: 1.5 }}>
                      <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                        Service Manager
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* Vertical line from Service Manager to Teams */}
                  <Box sx={{ height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box
                      sx={{
                        width: "2px",
                        height: "100%",
                        background: "linear-gradient(to bottom, #3498db, #2980b9)",
                      }}
                    />
                  </Box>

                  {/* Service Teams */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
                    <Card
                      sx={{
                        background: "rgba(52, 152, 219, 0.1)",
                        color: "white",
                        borderRadius: "8px",
                        border: "1px solid rgba(52, 152, 219, 0.2)",
                        textAlign: "center",
                      }}
                    >
                      <CardContent sx={{ p: 1 }}>
                        <FaTools size={14} color="#3498db" style={{ marginBottom: "2px" }} />
                        <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "0.75rem" }}>
                          Service Team
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        background: "rgba(52, 152, 219, 0.1)",
                        color: "white",
                        borderRadius: "8px",
                        border: "1px solid rgba(52, 152, 219, 0.2)",
                        textAlign: "center",
                      }}
                    >
                      <CardContent sx={{ p: 1 }}>
                        <FaTools size={14} color="#3498db" style={{ marginBottom: "2px" }} />
                        <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "0.75rem" }}>
                          Service Team
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>

                {/* Project Manager with Team */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  {/* Vertical line from horizontal to Project Manager */}
                  <Box sx={{ height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box
                      sx={{
                        width: "2px",
                        height: "100%",
                        background: "linear-gradient(to bottom, #3498db, #2980b9)",
                      }}
                    />
                  </Box>

                  <Card
                    sx={{
                      background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                      color: "white",
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      border: "1px solid rgba(52, 152, 219, 0.2)",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <CardContent sx={{ p: 1.5 }}>
                      <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                        Project Manager
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* Vertical line from Project Manager to Team */}
                  <Box sx={{ height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box
                      sx={{
                        width: "2px",
                        height: "100%",
                        background: "linear-gradient(to bottom, #3498db, #2980b9)",
                      }}
                    />
                  </Box>

                  {/* Project Team */}
                  <Card
                    sx={{
                      background: "rgba(52, 152, 219, 0.1)",
                      color: "white",
                      borderRadius: "8px",
                      border: "1px solid rgba(52, 152, 219, 0.2)",
                      textAlign: "center",
                    }}
                  >
                    <CardContent sx={{ p: 1 }}>
                      <FaProjectDiagram size={14} color="#3498db" style={{ marginBottom: "2px" }} />
                      <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "0.75rem" }}>
                        Project Team
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Box>

            {/* Business Development - Standalone with consistent height */}
            <Box sx={{ 
              flex: 1, 
              minWidth: "200px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              minHeight: "200px", // Fixed height container
              justifyContent: "flex-start",
            }}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(52, 152, 219, 0.3)",
                  width: "100%",
                  maxWidth: "180px",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 1,
                    }}
                  >
                    <FaChartLine size={20} color="#3498db" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Business Development
                  </Typography>
                </CardContent>
              </Card>
              
              {/* Empty space to match height with other columns */}
              <Box sx={{ height: "78px", visibility: "hidden" }}>
                <Typography variant="body2">Spacer</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Legend Section */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            background: "rgba(52, 152, 219, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(52, 152, 219, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#3498db",
              textAlign: "center",
            }}
          >
            Organizational Structure Overview
          </Typography>
          <Typography variant="body1" sx={{ color: "#ecf0f1", lineHeight: 1.7, textAlign: "center" }}>
            Our organizational structure is designed to ensure efficient operations, clear communication channels, 
            and effective project delivery across all departments. Each team works collaboratively to maintain 
            our commitment to quality and customer satisfaction.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OrganizationChart;