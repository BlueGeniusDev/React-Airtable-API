import { Fragment } from "react";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import { ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#aaaaaa",
    },
  },
});

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <div className="border-x-2 border-gray">
            <Header />
            <Home />
            <Footer />
          </div>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
