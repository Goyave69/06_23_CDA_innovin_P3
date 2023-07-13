import { Outlet } from "react-router-dom";
import SidebarWithHeader from "../components/Admin/Sidebar/SidebarWithHeader";

export default function Root() {
  return (
    <SidebarWithHeader>
      <Outlet />
    </SidebarWithHeader>
  );
}
