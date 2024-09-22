import { LuUser2 } from "react-icons/lu";
import { RiDashboardFill } from "react-icons/ri";
import { FaShoppingCart, FaTags}  from "react-icons/fa";
import { HiOutlineCollection } from "react-icons/hi";

export const menuData = [
  {
    key: "dashboard",
    icon: <RiDashboardFill />,
    label: "Dashboard",
    title: "Go to Dashboard", // Title for the menu item
  },
  {
    key: "product",
    icon: <FaShoppingCart />,
    label: "Products",
    title: "Products", // Title for the menu item
    children: [
      {
        key: "product/all",
        label: "View All",
        title: "All products", // Title for the submenu item
      },
      {
        key: "product/create",
        label: "Add",
        title: "Create product", // Title for the submenu item
      },
    ],
  },
  {
    key: "brands",
    icon: <HiOutlineCollection />,
    label: "Brands",
    title: "brands", // Title for the menu item
    children: [
      {
        key: "brand/all",
        label: "View All",
        title: "view all brands", // Title for the submenu item
      },
      {
        key: "brand/create",
        label: "Add",
        title: "create brand", // Title for the submenu item
      },
    ],
  },
  {
    key: "category",
    icon: <FaTags />,
    label: "Category",
    title: "category", // Title for the menu item
    children: [
      {
        key: "category/all",
        label: "View All",
        title: "view all category", // Title for the submenu item
      },
      {
        key: "category/create",
        label: "Add",
        title: "create category", // Title for the submenu item
      },
    ],
  }
];