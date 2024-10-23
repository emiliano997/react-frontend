import { Box, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";

export function Banner({ title, subtitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: indigo[800],
        color: "white",
        height: {
          xs: "200px",
          sm: "300px",
        },
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", fontSize: { xs: "30px", sm: "40px" } }}
      >
        {title}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: "15px", sm: "20px" } }}>
        {subtitle}
      </Typography>
    </Box>
  );
}
