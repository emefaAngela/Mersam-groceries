import supabase from "../../../utils/supabase";
import { useEffect, useState } from "react";
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  // add other fields as needed
};

export default function Shoppage() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: products } = await supabase.from("Products").select();
        setProductList(products ?? []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full h-full m-0">
      <div className="w-full m-0 h-48  text-black  flex flex-col items-center justify-center space-y-2">
        <h1 className="font-bold text-3xl">Shop page</h1>
        <span>Home/Shop</span>
      </div>

      <div className="mx-16   flex flex-row space-x-8  justify-center items-center">
        <div className="w-1/4 text-left -mt-64">
          <div>Filter Options</div>

          <div className="my-8 space-y-8 flex flex-col">
            <div>Category</div>
            <div>Price</div>
            <div>Review</div>
            <div>Brand</div>
            <div>Product Type</div>
            <div>Availabilty</div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col space-y-6 my-8">
          <div className="flex flex-row justify-between">
            <div>Showing 1-12 of 100 results</div>
            <div>Sort by:</div>
          </div>
          <div className="flex flex-row space-x-4">
            <div>Active Filter</div>
          </div>
          <div>
            <div className="w-full grid grid-cols-3 gap-4">
              {productList.map((product) => (
                <div
                  key={product.id}
                  className="flex-none flex flex-col space-y-4 sm:w-52 w-52 h-68 border border-gray-200 rounded-sm p-4"
                >
                  <div className="flex justify-end">
                    <img
                      className="w-6 h-6"
                      src={product.image}
                      alt="wishlist"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="w-24 h-24"
                      src={product.image}
                      alt="wishlist"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-green-400 text-md">
                      {product.category}
                    </div>
                    <div className="font medium text-lg text-gray-800">
                      {product.name}
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
      </div>
    </div>
  );
}
