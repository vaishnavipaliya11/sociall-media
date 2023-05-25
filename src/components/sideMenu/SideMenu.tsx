import { Menu } from "antd";
import React from "react";
import type { MenuProps } from "antd";
import {
  HomeTwoTone,
  MailOutlined,
  SaveTwoTone,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuProps["items"] = [
    { type: "divider" },

    getItem("Home", "/", <HomeTwoTone />),
    getItem("Bookmark", "bookmark", <SaveTwoTone />),

    getItem("Profile", "profile", <UserAddOutlined />),
  ];

  const navigate= useNavigate()
  const onMenuItemsClick = (e:any) => { 
    console.log("menu", e);
    navigate(`${e.key}`)
  };
  return (
    <div>
      <Menu
        onClick={onMenuItemsClick}
        style={{ width: "10rem" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default SideMenu;
