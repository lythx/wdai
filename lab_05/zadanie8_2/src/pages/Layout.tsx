import { Outlet, Link } from "react-router-dom";
import '../index.css'

const Layout = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  )
};

export default Layout;
