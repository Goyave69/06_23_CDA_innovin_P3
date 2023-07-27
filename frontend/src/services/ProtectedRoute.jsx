import { Navigate, useLocation } from "react-router-dom";
import getCookie from "./cookieHelper";

export default function ProtectedRoute({ children }) {
  const cookie = getCookie("user");
  const user = cookie.length > 0 ? JSON.parse(cookie.substring(2)) : null;
  const location = useLocation();

  if (user === null || user.role !== "admin") {
    return <Navigate to="/*" state={{ from: location }} replace />;
  }

  return children;
}
