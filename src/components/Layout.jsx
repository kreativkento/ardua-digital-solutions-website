import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
