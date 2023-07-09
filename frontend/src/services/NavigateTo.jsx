import { useNavigate } from "react-router-dom";

export default function NavigateTo(route) {
  const navigate = useNavigate();
  navigate(route);
}
