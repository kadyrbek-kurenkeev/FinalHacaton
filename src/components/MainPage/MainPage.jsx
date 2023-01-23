import React from "react";
import { Carousel } from "react-carousel-minimal";
import {CardActionArea, cardClasses, Grid} from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const MainPage = (relative = relative,
                  absolute = absolute
) => {
  //? images for carousel

  const data = [
    {

      image:
        "https://capricathemes.com/opencart/OPC10/OPC100231/image/cache/catalog/main-banner-2-1903x700.jpg",

    },
    {
      image:
        "https://capricathemes.com/opencart/OPC10/OPC100231/image/cache/catalog/main-banner-1-1903x700.jpg",
    },

  ];

  // ? Styles for carousel

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          //  backgroundColor: "rgba(243,244,246)"
        }}
      >
        <Grid container >
          <Grid item xs={12} className="grid_home">
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height='100%'
              // width="850px"
              // height="500px"
              captionStyle={captionStyle}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              // automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center'}} >
        <Grid   container justifyContent='space-around'  xs={12}
              sx={{py: 10}}
        >

          <Grid item xs={3}>
            first
          </Grid>
          <Grid item xs={3}>
            second
          </Grid>
          <Grid item xs={3}>
            third
          </Grid>
          <Grid item xs={3}>
            fourth
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container justifyContent='space-around' >
          <CardContent item xs={3}
                       style={{
                         position: 'relative',
                       }}
          >
            <Grid>
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-1.jpg" alt=""/></Grid>

              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
            </Grid>

          </CardContent>
          <CardContent item xs={3} >
            <Grid >
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-2.jpg" alt=""/>
              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
              </Grid>
            </Grid>

          </CardContent>
          <CardContent >
            <Grid>
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-3.jpg" alt=""/>
              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
              </Grid>
            </Grid>

          </CardContent>
        </Grid>
        <Typography pt={5}
        sx={{
          fontWeight: 900,
          fontSize: 30,
          textAlign: "center"

        }}
        >Trending Products
        </Typography>


        <Grid container xs={15} >
          <CardContent item xs={3}
                       style={{
                         position: 'relative',
                       }}
          >
            <Grid>
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-1.jpg" alt=""/></Grid>

            <Grid>
              <span>10% Discount Million Dollar Brands</span>
              <br/>
              <a href="#">Shop Now</a>
            </Grid>

          </CardContent>
          <CardContent item xs={3} >
            <Grid >
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-2.jpg" alt=""/>
              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
              </Grid>
            </Grid>

          </CardContent>
          <CardContent item xs={3}>
            <Grid>
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-3.jpg" alt=""/>
              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
              </Grid>
            </Grid>

          </CardContent>
          <CardContent item xs={3} >
            <Grid>
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-3.jpg" alt=""/>
              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
              </Grid>
            </Grid>

          </CardContent>
          <CardContent item xs={3} >
            <Grid>
              <img src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/sub-banner-3.jpg" alt=""/>
              <Grid>
                <span>10% Discount Million Dollar Brands</span>
                <br/>
                <a href="#">Shop Now</a>
              </Grid>
            </Grid>

          </CardContent>
        </Grid>


      </Box>

    </div>
  );
};

export default MainPage;
