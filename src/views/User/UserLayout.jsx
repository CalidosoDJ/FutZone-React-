import UserNavBar from "../../components/User/UserNavBar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <UserNavBar />
      <div className="container-fluid mt-3">
        <Outlet />
      </div>
    </>
  );
}