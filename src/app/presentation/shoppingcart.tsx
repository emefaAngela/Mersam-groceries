import { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  // add other fields as needed
};

export default function ShoppingCart() {
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
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1 className="text-3xl">Shop</h1>
        <span>Home / Shopping Cart</span>
      </div>
      <div className="flex flex-row space-x-8">
        <div className="flex">
          <table>
            <thead className="bg-yellow-300 h-12 rounded-lg flex flex-row px-4 py-1 space-x-42 justify-center items-center font-semibold">
              <tr>Product</tr>
              <tr>Price</tr>
              <tr>Quantity</tr>
              <tr>Subtotal</tr>
            </thead>
            <tbody className="flex flex-col space-y-2">
              {productList.map((product) => (
                <tr
                  key={product.id}
                  className="flex flex-row justify-between px-4 py-2 border-b"
                >
                  <td className="flex flex-row space-x-1">
                    <div className="w-16 h-16 p-2 border border-0.5 border-gray-200 rounded-md flex justify-center items-center">
                      <img src={product.image} className="w-16 h-16 " />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="font-semibold text-md">
                        {product.name}
                      </div>
                      <div>{product.price}</div>
                    </div>
                  </td>
                  <td>${product.price}</td>
                  <td>${product.price}</td>
                  <td>${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-72 space-y-4 border border-1 border-gray-200 rounded-lg items-center justify-center py-4">
          <div className="text-2xl font-semibold">Order Summary</div>
          <div className="grid grid-cols-2 px-10 gap-32">
            <div className="flex flex-col space-y-2">
              <div>Items</div>
              <div>Sub Total</div>
              <div>Shipping</div>
              <div>Coupon discount</div>
              <div className="pt-4">Total</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div>3</div>
              <div>$100</div>
              <div>$10</div>
              <div></div>
              <div>$200</div>
            </div>
          </div>
          <div className="bg-green-600 text-white text-center rounded-4xl px-6 py-2">Proceed to Checkout</div>
        </div>
      </div>
    </div>
  );
}
