import {
  FacebookIcon,
  InstagramIcon,
  ShoppingBagIcon,
  //SearchIcon,
  ArrowDown,
} from "lucide-react";
import { Button } from "../../../components/button";
export default function Navbar() {
  return (
    <div className="w-full   flex flex-col space-y-0">
      {/* header */}
      <div className="flex flex-row space-x-16 sm:px-24 sm:h-8 bg-yellow-400 text-black items-center justify-between px-4 py-2">
        <div>Call Us: 0206629672</div>
        <div>
          Place your first and get free delivery.
          <a>Shop now</a>
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

      {/* navbar */}
      <div className="bg-green-700 sm:px-24 h-32 text-white flex flex-col items-center justify-center px-4 py-2">
        <div className="flex flex-row space-x-32 w-full items-center justify-between">
          <div>logo</div>
          <div className="bg-[#388F6B] rounded-md w-96 text-sm px-4 py-1">
            Search bar
          </div>
          <div className="flex flex-row space-x-2">
            <ShoppingBagIcon className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* navbar menu */}
      <div className=" w-full flex flex-row space-x-8 bg-green-700 pb-8 sm:px-24 sm:h-8 items-center justify-between px-4 py-2">
        <Button className="rounded-md bg-yellow-400 text-black">
          Browse All Categories
        </Button>

        <div className="hidden sm:flex flex-row space-x-8 text-sm text-white">
          <div>Home</div>
          <div>Shop</div>
          <div>Fruits</div>
          <div>Vegetables</div>
          <div>About Us</div>
          <div>Blogs</div>
        </div>

        <div className="text-yellow-400">
          Recently Viewed
          <ArrowDown className="w-4 h-4 inline-block" />
        </div>
      </div>
    </div>
  );
}
