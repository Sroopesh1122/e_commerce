import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Ensure the Ant Design styles are imported
import AnimateWrapper from "./animate-page";
import { AnimatePresence } from "framer-motion";
import { ContextWrapper } from "./AppContext";
import { IoLogOut } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

const MenuDropDown = ({menuRef }) => {

    const{appTheme} = useContext(ContextWrapper);
    const activeKey =  localStorage.getItem("selectedKey");
    const menuItem = [
        {
            "title":"Profile",
            "icon": <FaCircleUser className={"text-xs md:text-sm"} />,
            "key":"profile"
        },
        {
            "title":"Logout",
            "icon": <IoLogOut  className={"text-xs md:text-sm"} />,
            "key":"logout"
        }
    ]


    const handleDropDownClick =(key)=>{
        localStorage.setItem("selectedKey", key); 
    }



  return (
    <ul
      ref={menuRef}
      className={"w-[100px] md:w-[150px] h-fit shadow-md rounded-md bg-white shadow-black absolute top-full right-0 p-2 py-4 "}
    >
     {
        menuItem.map((data)=><li className={"h-10 mt-1 flex rounded-sm justify-start gap-2 items-center w-full hover:bg-[#001529] hover:text-white ps-3 "+(activeKey === data.key ? "bg-[#001529] text-white":"")} key={data.key} onClick={()=>handleDropDownClick(data.key)} >{data.icon ? data.icon :""}{data.title}</li>)
     }
    </ul>
  );
};

const ProfileDropdown = () => {
  const [isVisible, setVisible] = useState(false);


  const{appTheme} = useContext(ContextWrapper);

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      profileRef.current && !profileRef.current.contains(event.target) && menuRef.current && !menuRef.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };

  const handleProfileClick = () => {
    setVisible((prev)=>!prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={profileRef}
      className="flex items-center cursor-pointer px-2 relative"
      onClick={handleProfileClick}
    >
      <Avatar style={{ marginRight: 8 }} className={appTheme === "dark" ? "shadow-sm shadow-white":""} icon={<UserOutlined />} />
      <span className={(appTheme === "dark" ? "text-white":"")}>My Profile</span>
      <AnimatePresence>
        {isVisible && (
          <AnimateWrapper
            key={"profile-dropdown"}
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MenuDropDown menuRef={menuRef}  />
          </AnimateWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
