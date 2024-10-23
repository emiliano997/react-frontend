import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ToastContainer />
      <CssBaseline />
      <Navbar title="Sistema de gestión" />

      <Box component="main" sx={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
