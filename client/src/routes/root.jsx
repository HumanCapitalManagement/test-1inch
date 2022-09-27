import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail" className="m-3">
        <Outlet />
      </div>
    </>
  );
}
