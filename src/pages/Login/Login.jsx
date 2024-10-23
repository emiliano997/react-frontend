import { Button } from "@mui/material";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { getUser } = useAuth();

  if (getUser()) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegisterForm setIsLogin={setIsLogin} />
      )}
    </>
  );
}
