import { Box, Typography } from "@mui/material";
import notFound from "../../assets/not-found.svg";

export function NotFoundPage() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        style={{ width: "250px" }}
        src={notFound}
        alt="Página no encontrada"
      />
      <Typography variant="h1" sx={{ fontSize: { xs: "40px", md: "50px" } }}>
        Página no encontrada
      </Typography>
      <Typography
        variant="h4"
        sx={{
          mt: 2,
          fontSize: { xs: "18px", md: "20px" },
          color: "gray",
        }}
      >
        La página que estás buscando no existe.
      </Typography>
    </Box>
  );
}
