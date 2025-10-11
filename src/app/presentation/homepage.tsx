import { Button } from "../../components/button";
import image from "../../assets/hompageimage.png";
import { BikeIcon, AnchorIcon, ShoppingBasket } from "lucide-react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import cover from "../../assets/cover.jpeg";

export default function Homepage() {
  return (
    <div className="w-full h-full flex flex-col space-y-16 ">
      <div className="w-full">
        <img
          className="relative z-1  object-fit opacity-10 w-full  h-[650px]"
          src={cover}
        ></img>
      </div>
      {/*    */}
      {/* hero section */}
      <div className="flex flex-col absolute w-full top-36 left-0 pl-32 z-5 space-y-8 sm:flex-row sm:space-x-40  items-center justify-between min-h-screen py-2  ">
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
            <Button className="text-gray-800 bg-white">
              View All Products
            </Button>
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

      {/* categories section */}
      <div className="w-full bg-white flex flex-col space-y-4">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-gray-500 text-lg">Categories</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="font-bold text-2xl text-gray-800">
            {" "}
            Featured <span className="text-green-700">Categories</span>
          </p>
        </div>
        <div>
          <div className="flex flex-row space-x-8 mt-4 justify-center items-center ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col justify-between items-center text-center h-32 w-48"
              >
                <div className="bg-gray-100 w-24 h-24 rounded-full flex justify-center items-center">
                  <ShoppingBasket className="w-12 h-12 text-gray-300 text-center" />
                </div>
                <div className="">
                  <p className="font-bold text-md"> {category.title}</p>
                  <p className="text-sm text-gray-500">
                    {category.length}Products
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* featured products section */}
      <div className="w-full bg-white flex flex-col space-y-4 mb-8">
        <div className="text-gray-500 text-lg">Products</div>
        <div className="w-full flex flex-row justify-between">
          <div>
            <p className="text-2xl font-medium text-gray-800">
              Featured <span className="text-green-700">Products</span>
            </p>
          </div>
          <div>
            <Button className="bg-green-700 text-white px-3">
              View All Products
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-row space-x-4 overflow-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col space-y-4 w-52 h-68 border border-gray-200 rounded-sm p-4"
            >
              <div className="flex justify-end">
                <img className="w-6 h-6" src={product.image} alt="wishlist" />
              </div>
              <div className="flex justify-center">
                <img className="w-24 h-24" src={product.image} alt="wishlist" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-green-400 text-md">{product.category}</div>
                <div className="font medium text-lg text-gray-800">
                  {product.title}
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-lg text-gray-800 font-medium">
                    GHS {product.price}
                  </div>
                  <div className="flex space-x-1 w-fit bg-green-200 rounded-full px-2 text-center items-center">
                    <div></div>
                    <div className="text-green-500">Add</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
