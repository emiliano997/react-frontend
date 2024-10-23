import {
  Box,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";

export function RegisterForm({ setIsLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        Registrarse
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
          console.log(data);
        })}
      >
        <TextField
          error={!!errors.fullName}
          helperText={!!errors.fullName?.message && errors.fullName.message}
          label="Nombre Completo"
          {...register("fullName", {
            required: {
              value: true,
              message: "El nombre completo es requerido",
            },
          })}
        />
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

        <Select
          error={!!errors.role}
          helperText={!!errors.role?.message && errors.role.message}
          label="Rol"
          {...register("role", {
            required: {
              value: true,
              message: "El rol es requerido",
            },
          })}
          value="USER"
        >
          <MenuItem value="ADMIN">Administrador</MenuItem>
          <MenuItem value="USER">Usuario</MenuItem>
        </Select>

        <Button type="submit" variant="contained">
          Registrarse
        </Button>
      </Box>

      <Typography>¿Ya tienes una cuenta?</Typography>
      <Link onClick={() => setIsLogin(true)}>Iniciar Sesión</Link>
    </Box>
  );
}
