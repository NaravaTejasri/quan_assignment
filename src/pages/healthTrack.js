import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function HealthTrack() {
  const [selectedValue, setSelectedValue] = useState(null);
  console.log("selected value", selectedValue);

  //common styles
  const commonStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  };

  //card radio button text styles
  const labelStyles = {
    "& .MuiFormControlLabel-label": {
      color: "#544573",
      fontSize: "20px",
    },
  };

  //card font styles
  const fontStyles = {
    fontFamily: "Danton Extra Bold",
    fontWeight: "800",
  };

  const theme = createTheme();

  theme.typography.h2 = {
    fontSize: 20,
    "@media (min-width:600px)": {
      fontSize: 25,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
    },
  };

  return (
    <Box
      position="relative"
      sx={{
        ...commonStyles,
        bgcolor: "#322749",
      }}
    >
      {/* header */}
      <Box>
        <Header />
      </Box>

      {/* circle */}
      <Box
        position="absolute"
        sx={{
          right: "0",
          top: "8rem",
        }}
      >
        <CircleOutlinedIcon
          sx={{
            color: "#1c1034",
            fontSize: "10rem",
            stroke: "#322749",
            strokeWidth: 1,
          }}
        />
      </Box>

      {/* card */}
      <Box
        component="div"
        sx={{
          ...commonStyles,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            height: "20rem",
            bgcolor: "#130a29",
            borderRadius: "16px",
            width: {
              xs: "30rem",
              sm: "35rem",
              md: "55rem",
              lg: "65rem",
              xl: "65rem",
            },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* text */}
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                sx={{
                  ...fontStyles,
                  mt: 3,
                }}
                color="#ffc000"
              >
                During the past 2 weeks
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  ...fontStyles,
                  mb: 3.5,
                }}
                color="#ffffff"
              >
                I have been eating and drinking healthily
              </Typography>
            </ThemeProvider>
            {/* select options */}
            <FormControl
              sx={{
                mt: "2rem",
              }}
            >
              <RadioGroup
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: {
                      xs: "1rem",
                      sm: "1.3rem",
                      md: "3rem",
                      lg: "3rem",
                      xl: "4rem",
                    },
                    color: "#544573",
                    stroke: "#130a29",
                    strokeWidth: 1,

                    "&.Mui-checked": {
                      color: "#544573",
                    },
                  },
                }}
              >
                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="never"
                  control={<Radio />}
                  label="Never"
                  labelPlacement="bottom"
                />

                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="rarely"
                  control={<Radio />}
                  label="Rarely"
                  labelPlacement="bottom"
                />

                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="occasionally"
                  control={<Radio />}
                  label="Occasionally"
                  labelPlacement="bottom"
                />

                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="sometimes"
                  control={<Radio />}
                  label="Sometimes"
                  labelPlacement="bottom"
                />

                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="frequently"
                  control={<Radio />}
                  label="Frequently"
                  labelPlacement="bottom"
                />

                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="usually"
                  control={<Radio />}
                  label="Usually"
                  labelPlacement="bottom"
                />

                <FormControlLabel
                  sx={{
                    ...labelStyles,
                  }}
                  value="always"
                  control={<Radio />}
                  label="Always"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Box>

      {/* circle */}
      <Box position="absolute" sx={{ bottom: "0", left: "-13rem", top: "" }}>
        <CircleOutlinedIcon
          sx={{
            color: "#1c1034",
            fontSize: "20rem",
            stroke: "#322749",
            strokeWidth: 1,
          }}
        />
      </Box>
    </Box> // main box
  );
}
