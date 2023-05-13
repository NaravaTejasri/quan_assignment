import {
  AppBar,
  Box,
  Button,
  Chip,
  Divider,
  Link,
  Toolbar,
} from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CircleIcon from "@mui/icons-material/Circle";

export default function Header() {
  const commonStyles = {
    color: "#544573",
    ml: "-0.3rem",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          bgcolor: "#1c1034",
        }}
        position="sticky"
        component={"nav"}
      >
        <Toolbar>
          {/* logo */}
          <Link href="/" sx={{ flexGrow: 1 }}>
            <Box component="img" sx={{ height: 24 }} alt="Logo" src={logo} />
          </Link>

          {/* middle part */}
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Chip
              label="IN GENERAL"
              sx={{
                color: "#756c84",
                height: 24,
                backgroundColor: "#ffffff",
              }}
            />

            <HorizontalRuleIcon
              sx={{
                ...commonStyles,
              }}
            />

            <CircleOutlinedIcon
              sx={{
                ...commonStyles,
              }}
            />

            <HorizontalRuleIcon
              sx={{
                ...commonStyles,
              }}
            />

            <CircleOutlinedIcon
              sx={{
                ...commonStyles,
              }}
            />

            <Divider>
              <CircleIcon
                sx={{
                  color: "#ffc000",
                }}
              />
            </Divider>
          </Box>

          {/* button */}
          <Button color="inherit" sx={{ color: "#6d687c", fontSize: "18px" }}>
            LOG OUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
