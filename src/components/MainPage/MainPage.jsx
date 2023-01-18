import React from "react";
import { Carousel } from "react-carousel-minimal";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const MainPage = () => {
  //? images for carousel

  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
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
      MainPage
      <Box
        sx={{
          width: "100%",
          //  backgroundColor: "rgba(243,244,246)"
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={9} className="grid_home_left">
            <Carousel
              data={data}
              time={2000}
              width="100%"
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
                maxWidth: "870px",
                maxHeight: "400px",
                margin: "40px auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainPage;
