import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
const About = () => {
  return (
    <div id="aboutUS">
      <AppBar position="static" style={{ backgroundColor: "#313234" }}>
        <Toolbar disableGutters className="mt-12 mb-12 ml-12 mr-12">
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Box
                className=" bg-white"
                style={{ borderRadius: 10, padding: 10 }}
              >
                <img src="logo.png" width="100%" alt="img" className="" />
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mb: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                About US
              </Typography>
              <span style={{ color: "white" }}>
                Save your time from endless browsing and overwhelming
                subscription options. Simplify your subscription journey and
                make informed decisions
              </span>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default About;
