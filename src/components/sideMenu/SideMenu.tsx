import { Menu } from "antd";
import React from "react";
import type { MenuProps } from "antd";
import {
    HomeTwoTone ,
  MailOutlined,
  SaveTwoTone ,UserAddOutlined 
} from "@ant-design/icons";

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

    getItem("Home", "home", <HomeTwoTone  />),
    getItem("Bookmark", "bookmark", <SaveTwoTone />),
    getItem("Liked", "liked", <MailOutlined />),
    getItem("Profile", "profile", <UserAddOutlined />),
  ];
  const onMenuItemsClick = () => {};
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
