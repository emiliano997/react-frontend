import { Box, TextField, Typography, Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";

export function LoginForm({ setIsLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
        height: "calc(100vh - 64px)",
        gap: 2,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", fontSize: { xs: "30px", sm: "40px" } }}
      >
        Iniciar Sesión
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: {
            xs: "100%",
            sm: "500px",
          },
        }}
        onSubmit={handleSubmit((data) => {
          login(data.email, data.password).then((response) => {
            if (response.status === 401) {
              return toast.error("Credenciales inválidas");
            }

            toast.success("Inicio de sesión exitoso");

            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
          });
        })}
      >
        <TextField
          error={!!errors.email}
          helperText={!!errors.email?.message && errors.email.message}
          label="Email"
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido",
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "El email es inválido",
            },
          })}
        />
        <TextField
          error={!!errors.password}
          helperText={!!errors.password?.message && errors.password.message}
          label="Contraseña"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          })}
        />
        <Button type="submit" variant="contained">
          Iniciar Sesión
        </Button>
      </Box>

      <Typography>¿No tienes una cuenta? </Typography>
      <Link onClick={() => setIsLogin(false)}>Registrarse</Link>
    </Box>
  );
}
