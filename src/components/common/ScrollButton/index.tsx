import React from "react";
import { Fab, Box } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        zIndex: 9999,
      }}
    >
      <Fab color="primary" size="small" onClick={scrollToTop}>
        <KeyboardArrowUp />
      </Fab>
      <Fab color="secondary" size="small" onClick={scrollToBottom}>
        <KeyboardArrowDown />
      </Fab>
    </Box>
  );
};

export default ScrollButtons;
