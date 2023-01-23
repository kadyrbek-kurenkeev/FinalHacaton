import React from "react";
import { Carousel } from "react-carousel-minimal";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import ProductList from "../Product/ProductList";
import { Container, Grid } from "@mui/material";
import { MDBCarousel, MDBCarouselItem, MDBIcon } from "mdb-react-ui-kit";

const MainPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <MDBCarousel
        showIndicators
        showControls
        fade
        style={{ marginTop: "70px" }}
      >
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://capricathemes.com/opencart/OPC10/OPC100231/image/cache/catalog/main-banner-2-1903x700.jpg"
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://capricathemes.com/opencart/OPC10/OPC100231/image/cache/catalog/main-banner-1-1903x700.jpg"
          alt="..."
        ></MDBCarouselItem>
      </MDBCarousel>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} mt={6}>
            <Grid item textAlign="center">
              <MDBIcon fas icon="ship" style={{ fontSize: "40px" }} />
              <p
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "24px" }}
              >
                Worldwide Shipping
              </p>
              <p className="text-center" style={{ opacity: "0.7" }}>
                Order Above $100
              </p>
            </Grid>
            <Grid item textAlign="center" xs={3}>
              <MDBIcon fas icon="coins" style={{ fontSize: "40px" }} />
              <p
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "24px" }}
              >
                Easy 30 Days Return
              </p>
              <p className="text-center" style={{ opacity: "0.7" }}>
                Back Returns In 7 Days
              </p>
            </Grid>
            <Grid item textAlign="center" xs={3}>
              <MDBIcon
                fas
                icon="hand-holding-usd"
                style={{ fontSize: "40px" }}
              />
              <p
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "24px" }}
              >
                Money Back Guarantee
              </p>
              <p className="text-center" style={{ opacity: "0.7" }}>
                Guarantee With In 30 days
              </p>
            </Grid>
            <Grid item textAlign="center" xs={3}>
              <MDBIcon fas icon="phone-alt" style={{ fontSize: "40px" }} />
              <p
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "24px" }}
              >
                Easy Online Support
              </p>
              <p className="text-center" style={{ opacity: "0.7" }}>
                Any Time Support
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={6}>
            <Grid item xs={4}>
              <Grid item xs={11} style={{ position: "relative" }}>
                <div className="bg-image hover-zoom">
                  <img
                    src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-1.jpg"
                    className="w-100"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "30px",
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "31px",
                  }}
                >
                  <span style={{ fontWeight: "600", fontSize: "16px" }}>
                    10% Discount
                  </span>
                  <span style={{ fontWeight: "400", fontSize: "23px" }}>
                    Million Dollar
                  </span>
                  <a
                    style={{
                      color: "black",
                    }}
                    href=""
                  >
                    Shop Now
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={11} style={{ position: "relative" }}>
                <div className="bg-image hover-zoom">
                  <img
                    src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-2.jpg"
                    className="w-100"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "30px",
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "31px",
                  }}
                >
                  <span style={{ fontWeight: "600", fontSize: "16px" }}>
                    20% Discount
                  </span>
                  <span style={{ fontWeight: "400", fontSize: "23px" }}>
                    Profashion Rise
                  </span>
                  <a
                    style={{
                      color: "black",
                    }}
                    href=""
                  >
                    Shop Now
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={11} style={{ position: "relative" }}>
                <div className="bg-image hover-zoom">
                  <img
                    src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-3.jpg"
                    className="w-100"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "30px",
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "31px",
                  }}
                >
                  <span style={{ fontWeight: "600", fontSize: "16px" }}>
                    30% Discount
                  </span>
                  <span style={{ fontWeight: "400", fontSize: "26px" }}>
                    Red Wolves
                  </span>
                  <a
                    style={{
                      color: "black",
                    }}
                    href=""
                  >
                    Shop Now
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "38px",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          >
            Our Products
          </Typography>
        </Box>
        <ProductList />
      </Container>
    </Box>
  );
};

export default MainPage;
