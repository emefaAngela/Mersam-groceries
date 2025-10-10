import DashboardComponent from "./dashboardComponent";
import { cn } from "../../lib/utils";
import { NavLink, Route, Routes } from "react-router-dom";
import Products from "./products";
import { LayoutDashboard, ShoppingBagIcon, BoxIcon } from "lucide-react";

export default function Dashboard() {
  const navbarItems = [
    { id: 0, name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
    {
      id: 1,
      name: "Products",
      link: "/dashboard/products",
      icon: BoxIcon,
    },
    { id: 2, name: "Orders", link: "/orders", icon: ShoppingBagIcon },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      {/* header */}
      {/* <div className="w-full h-24 flex bg-green-700 flex-row justify-between"></div> */}
      <div className="w-full  flex flex-row space-x-4">
        {/* Sidebar */}
        <div className="w-[15%] h-[745px] px-8 pt-16  flex flex-col justify-between  ">
          <div className="flex flex-col space-y-4">
            {navbarItems.map((item) => (
              <NavLink
                to={item.link}
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 border",
                    isActive
                      ? "text-green-700 border-green-700 bg-green-50 font-medium"
                      : "text-gray-800 border-transparent hover:text-green-700 hover:bg-green-50"
                  )
                }
                key={item.id}
              >
                <div className="justify-center items-center flex ">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>{item.name}</div>
              </NavLink>
            ))}
          </div>

          <div className=" mb-8">
            <div>Logout</div>
          </div>
        </div>

        {/* vertical row */}
        <div className="border border-gray-200 h-[745px]"></div>
        {/* main content */}
        <div className="w-[85%] h-[600px] bg-white p-4">
          <Routes>
            <Route index element={<DashboardComponent />} />
            <Route path="products" element={<Products />} />
            {/* <Route path="/orders" element={<OrdersComponent />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
