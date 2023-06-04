import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Categories from "../components/categories";
import Dialog from "../components/dialog";

export default function Compare() {
  const [tabValue, setTabValue] = React.useState(0);
  const [openTab, setOpenTab] = useState(0);
  const [pastTab, setPastTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [category, setCategory] = useState(-1);
  const [uri, setUri] = useState("");

  const checkEmail = async (email) => {
    try {
      return true;
    } catch (error) {}
  };
  const confirmEmail = () => {
    if (!confirm) {
      setOpenDialog(true);
    } else {
      setOpenTab(1);
    }
  };

  const handleCloseDialog = () => {
    setTabValue(pastTab);
    setOpenTab(0);
    setOpenDialog(false);
  };

  const handleSaveDialog = async (email) => {
    let result = await checkEmail(email);
    if (result == true) {
      setOpenTab(1);
      setConfirm(true);
      setOpenDialog(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setPastTab(tabValue);
    setTabValue(newValue);
  };

  return (
    <div id="compare" className="p-12">
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h3"
              sx={{
                m: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: "bold",
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Find and Compare Subscription Plan
            </Typography>
            <div className="m-4">
              Save your time from endless browsing and overwhelming subscription
              options. Simplify your subscription journey and make informed
              decisions
            </div>
          </Grid>
          <Grid item xs={4}>
            <img src="image.png" alt="img" />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Categories
          sx={{
            width: "100%",
            margin: 2,
          }}
          category={category}
          setCategory={setCategory}
          setSource={setUri}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          marginBottom: 2,
          border: 1,
          borderRadius: 2,
          borderColor: "divider",
          boxShadow: "-10px 5px 12px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            m: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          All Categories
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            m: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab
              label="Lite Comparison"
              onClick={() => {
                setOpenTab(0);
              }}
            />
            <Tab
              label="Full Comparison"
              onClick={() => {
                confirmEmail();
              }}
            />
            <Tab
              label="Other Country Deals"
              onClick={() => {
                setOpenTab(2);
              }}
            />
            <Tab
              label="Integration Deals"
              onClick={() => {
                setOpenTab(3);
              }}
            />
            <Tab
              label="Missing Information"
              onClick={() => {
                setOpenTab(4);
              }}
            />
          </Tabs>
        </Box>
        <div className="relative">
          {openDialog ? (
            <Dialog
              open={openDialog}
              handleClose={handleCloseDialog}
              handleSave={handleSaveDialog}
            />
          ) : (
            <></>
          )}
          <div className={openTab === 0 ? "block" : "hidden"} id="link1">
            <iframe
              width="100%"
              height="700"
              src={
                "https://airtable.com/embed/shrYBakYy2ezQGGx7?viewControls=on" +
                uri
              }
            ></iframe>
          </div>
          <div
            className={openTab === 1 && confirm ? "block" : "hidden"}
            id="link2"
          >
            <iframe
              width="100%"
              height="700"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRluXcoyZOl3YRgzY_FSdeyu1t1dPNjs39KQjxhCq7aP1V9QmlvJ9XdfpBR49dBT894gVXipjEAcazG/pubchart?oid=204936261&amp;format=interactive"
              style={{ height: "398px !important" }}
            ></iframe>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link3">
            <iframe
              width="100%"
              height="700"
              src="https://airtable.com/embed/shrYBakYy2ezQGGx7?viewControls=on"
            ></iframe>
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <iframe
              width="100%"
              height="700"
              src="https://airtable.com/embed/shrYBakYy2ezQGGx7?viewControls=on"
            ></iframe>
          </div>
          <div className={openTab === 4 ? "block" : "hidden"} id="link3">
            <iframe
              width="100%"
              height="700"
              src="https://airtable.com/embed/shrYBakYy2ezQGGx7?viewControls=on"
            ></iframe>
          </div>
        </div>
      </Box>
    </div>
  );
}
