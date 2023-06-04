import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props.expanded ? (
        <RemoveIcon sx={{ fontSize: "0.9rem" }} />
      ) : (
        <AddIcon sx={{ fontSize: "0.9rem" }} />
      )
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className="m-12">
      <Grid container spacing={8}>
        <Grid item xs={5}>
          <Box style={{ padding: 10 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 22,
                color: "inherit",
              }}
            >
              Frequently Asked Question (FAQ)
            </Typography>
            <span>
              Find the answer to all of our most frequently asked question
            </span>
          </Box>
        </Grid>

        <Grid item xs={7}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expanded={expanded === "panel1"}
            >
              <Typography>
                Question Facilisis gravida neque convallis a cras?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expanded={expanded === "panel2"}
            >
              <Typography>
                Question Facilisis gravida neque convallis a cras?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expanded={expanded === "panel3"}
            >
              <Typography>
                Question Facilisis gravida neque convallis a cras?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <div
            className="m-4 p-8"
            style={{ backgroundColor: "#313234", borderRadius: 10 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={8}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    letterSpacing: ".1rem",
                    color: "white",
                  }}
                >
                  Join Wait List for Free
                </Typography>
                <span className=" text-white">
                  Save your time from endless browsing and overwhelming
                  subscription options. Simplify your subscription journey and
                  make informed decisions
                </span>
                <div className="mt-8 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 pl-4"
                    style={{
                      width: "400px",
                      outline: "none",
                      borderRadius: 5,
                      position: "relative",
                    }}
                  />
                  <button
                    type="button"
                    className="absolute p-1"
                    style={{ backgroundColor: "#313234", color: "white",borderRadius:5, left:"330px", top:"5px" }}
                  >
                    Submit
                  </button>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ borderRadius: 10, padding: 10 }}>
                  <img src="image2.png" width="100%" alt="img" className="" />
                </Box>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FAQ;
