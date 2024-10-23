import { jwtDecode } from "jwt-decode";

export function decodeToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}
