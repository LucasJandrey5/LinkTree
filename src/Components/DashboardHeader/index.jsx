import React, { useContext } from "react";
import { TopHeader, Menu } from "./style.js";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/auth/AuthContext.js";

import ProfileImg from "../../images/ProfileImg.png";

const DashboardHeader = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <TopHeader>
        <div>{/* <NavLogo>LinkTree</NavLogo> */}</div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard/" href="">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/pages" href="">
                Pages
              </Link>
            </li>
          </ul>
        </nav>

        <Link to={"/dashboard/profile"}>
          <Menu>
            <img src={ProfileImg} alt="" />
          </Menu>
        </Link>
      </TopHeader>
      <Outlet />
    </div>
  );
};

export default DashboardHeader;
