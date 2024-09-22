import React, { useState, useEffect, useContext } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import TogglerSwitch from "./TogglerSwitch";
import { IoSunny, IoMoon } from "react-icons/io5";
import { menuData } from "../assets/MenuData";
import { Outlet, useNavigate } from "react-router-dom";
import { ContextWrapper } from "./AppContext";
import ProfileDropdown from "./ProfileDropDown";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState("1");
  const {appTheme,handleTheme} = useContext(ContextWrapper);
  const navigate = useNavigate();




  useEffect(() => {
    const savedKey = localStorage.getItem("selectedKey");
    
    
    if (savedKey) {
      setSelectedKey(savedKey);
    }
  }, []);

 
  const handleThemeChange = () => {
    const newTheme = appTheme === "dark" ? "light" : "dark";
    handleTheme(newTheme)
  };

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    localStorage.setItem("selectedKey", e.key); 
    navigate(e.key);
  };

  return (
    <Layout className="h-screen w-full 3xl:w-[1800px]  mx-auto">
      <Sider trigger={null} collapsible collapsed={collapsed} theme={appTheme} className={"bg-transition "+ (appTheme === "dark" ? "dark-mode":"")}>
        <div className={"w-full h-fit center py-4"}>
          <FaCanadianMapleLeaf
            className={"text-2xl md:text-4xl  " + (appTheme === "dark" ? "text-white" : "text-black")}
          />
        </div>
        <Menu
          className="mt-10 flex flex-col gap-5"
          theme={appTheme}
          mode="inline" 
          selectedKeys={[selectedKey]} 
          onClick={handleMenuClick} 
          items={menuData}
        />
      </Sider>
      <Layout
      className={"bg-transition "+(appTheme === "dark" ? "dark-mode":"")} 
      >
        <Header
          style={{
            padding: 0,
            background: "white",
            position: "relative",
          }}
          className={"bg-transition "+(appTheme === "dark" ? "dark-mode":"") }
        >
          <div className="flex justify-between px-5 items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
            className={(appTheme === "dark" ? "text-white hover-text-white " :"text-black ")}
          />
          <div className="flex justify-center gap-5 items-center">
          <TogglerSwitch
            size="small"
            onChangeHandler={handleThemeChange}
            checkedIcon={<IoSunny className="text-white relative top-[0.1rem]" />}
            unCheckedIcon={<IoMoon className="relative top-[0.1rem]" />}
          />

          <ProfileDropdown/>

          </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 0,
            height:500,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
          className="bg-white"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
