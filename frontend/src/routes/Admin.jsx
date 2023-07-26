import { Outlet } from "react-router-dom";
import SidebarWithHeader from "../components/Admin/Sidebar/SidebarWithHeader";
import ProtectedRoute from "../services/ProtectedRoute";

export default function Root() {
  return (
    <ProtectedRoute>
      <SidebarWithHeader>
        <Outlet />
      </SidebarWithHeader>
    </ProtectedRoute>
  );
}
