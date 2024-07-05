import Home from "./pages/Home.jsx";
import Indonesia from "./pages/Indonesian/index.jsx";
import Provinsi from "./pages/Provinsi/index.jsx";
import About from "./pages/About/index.jsx";
import { GlobalStyle } from "./components";
import Layout from "./Layout";
import theme from "./constants/theme.js";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/provinsi" element={<Provinsi />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </ThemeProvider >
  );
}

export default App;
