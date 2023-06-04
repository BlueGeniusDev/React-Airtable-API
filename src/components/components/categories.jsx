import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

const DirectionStack = ({ category, setCategory, setSource }) => {
  const [categories, setCategories] = useState([]);
  const visibleCount = 6;
  const totalCount = categories.length + 1;
  const [current, setCurrent] = useState(1);
  const token =
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const setCurrentPage = (page) => {
    if (page >= 1 && page <= totalCount - visibleCount + 1) setCurrent(page);
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.airtable.com/v0/xxxxxxxxxxxxxxxxxxxxxxxx_url",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setCategories(data.records);
      } catch (error) {
        console.error(error);
      }
    };
    // This code will run after the first render
    fetchCategories();
  }, []);

  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
        <IconButton onClick={() => setCurrentPage(current - 1)}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "flex" }, mr: 1 }}>
        <Stack
          sx={{ flexGrow: 1, display: { xs: "flex" }, mr: 1 }}
          direction="row"
          spacing={2}
        >
          <Button
            variant={category == -1 ? "contained" : "outlined"}
            style={{ display: current == 1 ? "block" : "none" }}
            onClick={() => {
              setCategory(-1);
              setSource("");
            }}
          >
            All Categories
          </Button>
          {categories.map((item, index) => {
            return (
              <Button
                key={index}
                variant={category == index ? "contained" : "outlined"}
                style={{
                  display:
                    index + 2 >= current &&
                    index + 2 <= visibleCount + current - 1
                      ? "block"
                      : "none",
                }}
                onClick={() => {
                  setCategory(index);
                  setSource(`&filter_Category=${item.fields.Name}`);
                }}
              >
                {item.fields.Name}
              </Button>
            );
          })}
        </Stack>
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          sx={{ flexGrow: 0 }}
          onClick={() => setCurrentPage(current + 1)}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default DirectionStack;
