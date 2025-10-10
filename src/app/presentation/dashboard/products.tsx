import { EllipsisIcon, PlusIcon } from "lucide-react";
import { Button } from "../../../components/button";
import { cn } from "../../lib/utils";
import productImage from "../../../assets/product.jpg";
export default function Products() {
  const products = [
    {
      id: 1,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "In Stock",
    },
    {
      id: 2,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "Inactive",
    },
    {
      id: 3,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "Out of Stock",
    },
    {
      id: 4,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "In Stock",
    },
    {
      id: 5,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "Out of Stock",
    },
    {
      id: 6,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "In Stock",
    },
    {
      id: 7,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "Out of Stock",
    },
    {
      id: 8,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "Out of Stock",
    },
    {
      id: 9,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "In Stock",
    },
    {
      id: 10,
      title: "Banana",
      category: "Fruits",
      price: 5,
      image: productImage,
      count: 10,
      status: "In Stock",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center m-auto">
      <div className="w-full py-4 flex flex-row justify-between">
        <div className="text-xl text-gray-600">Products List</div>
        <div className="flex flex-row space-x-2">
          <Button className="bg-green-700 text-white px-3 rounded-md text-center items-center flex justify-center text-md">
            <PlusIcon className="w-5 h-5 text-white inline-block mr-2" />
            Add New Product
          </Button>
        </div>
      </div>
      <div className="w-full border border-gray-300 rounded-md text-sm">
        {/* Table Header */}
        <div className="grid grid-cols-9 bg-gray-100 text-gray-600 font-medium border-b border-gray-300 rounded-t-md">
          <div className="px-4 py-2"></div>
          <div className="px-1 py-2">ID</div>
          <div className="px-4 py-2">Image</div>
          <div className="px-4 py-2">Title</div>
          <div className="px-4 py-2">Category</div>
          <div className="px-4 py-2">Price</div>
          <div className="px-4 py-2">Count</div>
          <div className="px-4 py-2">Status</div>
          <div className="px-4 py-2">Actions</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-9 items-center hover:bg-gray-50 transition-colors"
            >
              {/* Checkbox */}
              <div className="px-4 py-3 flex justify-center">
                <input type="checkbox" className="w-4 h-4 accent-green-600" />
              </div>

              {/* ID */}
              <div className="px-1 py-1">{product.id}</div>

              {/* Image */}
              <div className="px-4 py-3">
                <img
                  src={productImage}
                  alt={product.title}
                  className="w-14 h-14 object-cover  "
                />
              </div>

              {/* Title */}
              <div className="px-4 py-3 font-medium text-gray-800 truncate">
                {product.title}
              </div>

              {/* Category */}
              <div className="px-4 py-3 text-gray-600">{product.category}</div>

              {/* Price */}
              <div className="px-4 py-3 font-semibold text-gray-700">
                GHS {product.price}
              </div>

              {/* Count */}
              <div className="px-4 py-3 text-gray-700">{product.count}</div>

              {/* Status */}
              <div
                className={cn(
                  "px-4 py-2 w-fit text-center text-xs font-semibold rounded-full",
                  product.status == "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                )}
              >
                {product.status}
              </div>

              {/* Actions */}
              <div className="px-4 py-3 flex justify-center">
                <EllipsisIcon className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
