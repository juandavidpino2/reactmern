import React from "react";
import { Button } from "antd";
import {logout} from "../../../api/auth";
import {
  HomeOutlined,
  PoweroffOutlined,
  MenuOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import AgusLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  }

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={AgusLogo}
          alt=" Agustin Navarro Galdon"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <MenuFoldOutlined />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
