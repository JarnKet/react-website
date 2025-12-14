import React from "react";

import { Outlet, Link, NavLink } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="main-header">
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/"}
        >
          ໜ້າຫຼັກ
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/about"}
        >
          ກ່ຽວກັບຂ້ອຍ
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/posts"}
        >
          ໂພສ
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/users"}
        >
          ລາຍການຂອງຜູ້ໃຊ້
        </NavLink>
      </header>

      <Outlet />
    </div>
  );
};

export default MainLayout;
