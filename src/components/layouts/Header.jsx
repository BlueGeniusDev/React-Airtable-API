import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Header = () => {
  const [tab, setTab] = useState("compare");
  return (
    <AppBar
      position="static"
      className="p-12"
      style={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
          <img src="logo.png" alt="logo" />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex" }, mr: 1 }}>
          <a href="/#compare" onClick={() => setTab("compare")}>
            <Button
              sx={{
                my: 2,
                color: "darkgray",
                display: "block",
                textTransform: "capitalize",
                borderRadius: 0,
                borderBottom: tab === "compare" ? 1 : 0,
              }}
            >
              {"Compare"}
            </Button>
          </a>
          <a href="/#aboutUS" onClick={() => setTab("aboutUS")}>
            <Button
              sx={{
                my: 2,
                color: "darkgray",
                display: "block",
                textTransform: "capitalize",
                borderRadius: 0,
                borderBottom: tab === "aboutUS" ? 1 : 0,
              }}
            >
              {"About US"}
            </Button>
          </a>
          <a href="/#faq" onClick={() => setTab("faq")}>
            <Button
              sx={{
                my: 2,
                color: "darkgray",
                display: "block",
                textTransform: "capitalize",
                borderRadius: 0,
                borderBottom: tab === "faq" ? 1 : 0,
              }}
            >
              {"FAQ"}
            </Button>
          </a>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#313234", color: "white" }}
            sx={{
              my: 2,
              textTransform: "capitalize",
            }}
          >
            {"Join WaitList for Free"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
