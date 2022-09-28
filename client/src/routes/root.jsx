import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar state={navigation.state} />
      <div id="detail" className="m-3">
        <Outlet />
      </div>
    </>
  );
}
