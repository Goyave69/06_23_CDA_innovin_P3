import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserProvider } from "../services/Context/UserContext";
import { CartProvider } from "../services/Context/CartContext";

export default function Root() {
  return (
    <>
      <CartProvider>
        <UserProvider>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <ToastContainer />
        </UserProvider>
      </CartProvider>
    </>
  );
}
