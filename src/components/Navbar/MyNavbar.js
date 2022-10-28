import React from "react";
import { AppBar, IconButton, Stack, Typography } from "@mui/material";

import Toolbar from "@mui/material/Toolbar";

import AccessibilityIcon from "@mui/icons-material/Accessibility";

export default function MyNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onCli
        >
          <AccessibilityIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack></Stack>
      </Toolbar>
    </AppBar>
  );
}
