import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
  return (
    <footer
      position="static"
      className="bg-primary"
      style={{ borderRadius: "10px 10px 0px 0px" }}
    >
      <Toolbar disableGutters className="p-5">
        <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
          <img
            src="logo.png"
            width=""
            alt="img"
            className="m-2"
            style={{ borderRadius: 10 }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex" }, mr: 1 }}>
          <a href="/#compare">
            <Button
              sx={{
                my: 2,
                color: "darkgray",
                display: "block",
                textTransform: "capitalize",
                borderRadius: 0,
              }}
            >
              {"Compare"}
            </Button>
          </a>
          <a href="/#aboutUS">
            <Button
              sx={{
                my: 2,
                color: "darkgray",
                display: "block",
                textTransform: "capitalize",
              }}
            >
              {"About US"}
            </Button>
          </a>
          <a href="/#faq">
            <Button
              sx={{
                my: 2,
                color: "darkgray",
                display: "block",
                textTransform: "capitalize",
              }}
            >
              {"FAQ"}
            </Button>
          </a>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Typography
            sx={{
              my: 2,
              color: "white",
              display: "block",
              textTransform: "capitalize",
            }}
          >
            {"Copyrights © Subscribed FYI 2023 | All Rights Reserved"}
          </Typography>
        </Box>
      </Toolbar>
    </footer>
  );
};

export default Footer;
