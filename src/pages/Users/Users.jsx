import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Banner } from "../../components/Banner/Banner";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserService } from "./services/UserService";
import { blue, green, grey } from "@mui/material/colors";

export function UsersPage() {
  const { user, token } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    UserService.getUsers(token).then((data) => {
      setUsers(data);
    });
  }, [user, navigate]);

  return (
    <>
      <Banner title="Usuarios" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 2,
        }}
      >
        {users.map((user) => (
          <Card
            key={user.id}
            sx={{
              width: 200,
              height: 150,
              position: "relative",
              backgroundColor: user.role === "ADMIN" ? green[400] : blue[300],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {user.email}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {user.role}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ position: "absolute", bottom: 0, width: "100%" }}
            >
              <Button size="small" color="inherit">
                Ver
              </Button>
              <Button size="small" color="inherit">
                Editar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
