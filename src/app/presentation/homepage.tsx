import { Button } from "../../components/button";
import image from "../../assets/hompageimage.png";
import { BikeIcon, AnchorIcon } from "lucide-react";

export default function Homepage() {
  return (
    <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-40  items-center justify-between min-h-screen py-2 w-full ">
      {/* Text component */}
      <div className="w-full sm:w-1/2 flex flex-col sm:text-left space-y-8">
        <Button className="bg-white text-left">
          The Best Online Grocery Store
        </Button>

        <h2 className="text-gray-800 text-4xl">
          Your one-stop shop for{" "}
          <span className="text-green-700">Quality Groceries</span>
        </h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          deserunt.
        </p>

        <div className="flex space-x-4">
          <Button className="bg-green-700 text-white  ">Shop Now</Button>
          <Button className="text-gray-800 bg-white">View All Products</Button>
        </div>
      </div>

      {/* Image component */}
      <div className="w-full sm:w-1/2 -mt-96 sm:-mt-0">
        <img
          src={image}
          alt="Homepage Image"
          className="w-full -ml-8 sm:-ml-0 sm:w-3/4 sm:h-auto"
        />
        <div>
          <Button className="relative bottom-10 sm:bottom-20 left-20 bg-white flex space-x-2 text-center items-center">
            <div className="bg-green-700 p-1 rounded-full">
              <BikeIcon className="w-5 h-5 text-white" />
            </div>

            <div>Fast delivery</div>
          </Button>
          <Button className="relative bottom-40 left-40 sm:left-60 bg-white flex space-x-2 text-center items-center">
            <div className="bg-green-700 p-1 rounded-full">
              <AnchorIcon className="w-4 h-4 text-white" />
            </div>
            <div>Secure Payment</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
