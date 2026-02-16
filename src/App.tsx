//import { useState } from "react";
import "./index.css";
import { Container } from "./components/container";
import Homepage from "./app/presentation/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/presentation/dashboard/dashboard";
// import { FacebookIcon, InstagramIcon } from "lucide-react";
import Shoppage from "./app/presentation/shoppage";
//import Products from "./app/presentation/dashboard/products";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full h-full">
              <Container>
                <Homepage />
              </Container>
              {/* Footer */}
              {/* <div className="w-full  bg-green-700 h-96 sm:h-72 px-10 sm:px-24 py-16 flex flex-col sm:flex-row space-x-8 sm:space-x-16 justify-between">
                <div className="flex flex-col space-y-4 text-white w-64">
                  <div>logo</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, natus?
                  </div>
                  <div>
                    <ul className="flex flex-row space-x-2">
                      <li>
                        <FacebookIcon className="w-4 h-4" />
                      </li>
                      <li>
                        <InstagramIcon className="w-4 h-4" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-16">
                  <div className="flex flex-col space-y-4">
                    <div className="text-white font-medium">Company</div>
                    <div className="text-gray-300">Blog</div>
                    <div className="text-gray-300">Contact Us</div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="text-white font-medium">
                      Customer Services
                    </div>
                    <div className="text-gray-300">Blog</div>
                    <div className="text-gray-300">Contact Us</div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="text-white font-medium">
                      Our Information
                    </div>
                    <div className="text-gray-300">Blog</div>
                    <div className="text-gray-300">Contact Us</div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="text-white font-medium">Contact Info</div>
                    <div className="text-gray-300">Blog</div>
                    <div className="text-gray-300">Contact Us</div>
                  </div>
                </div>
              </div> */}
            </div>
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/shop" element={<div w-full h-full>
          <Container>
            <Shoppage />
          </Container>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
