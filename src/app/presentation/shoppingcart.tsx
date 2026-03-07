import Cart from "./shared/cart";
import { useSelector } from "react-redux";
import type { ProductType } from "../../../utils/types";


export default function ShoppingCart() {
  const cartItems = useSelector((state: any) => state.checkout.cartProducts);
  console.log(cartItems);

  return (
    <div className="w-full h-full m-0">
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1 className="text-3xl">Shop</h1>
        <span>Home / Shopping Cart</span>
      </div>
      <div className="flex sm:flex-row flex-col space-y-8  sm:justify-between sm:mx-24 mx-auto items-center justify-center mb-16">
        <div className="flex">
          <table>
            <thead className="bg-yellow-300 h-12 rounded-lg flex flex-row px-4 py-1 space-x-8  sm:space-x-42 justify-center items-center font-semibold">
              <tr>Product</tr>
              <tr>Price</tr>
              <tr>Quantity</tr>
              <tr>Subtotal</tr>
            </thead>
            <tbody className="flex flex-col space-y-2">
              {cartItems.map((product: ProductType) => (
                <tr
                  key={product.id}
                  className="flex flex-row justify-between sm:px-4 py-2 border-b"
                >
                  <td className="flex sm:flex-row flex-col space-x-1">
                    <div className="sm:w-16 sm:h-16 h-12 w-12 p-2 border border-0.5 border-gray-200 rounded-md flex justify-center items-center">
                      <img src={product.image} className="sm:w-16 sm:h-16 " />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="font-semibold text-md">
                        {product.name}
                      </div>
                      {/* <div>{product.price}</div> */}
                    </div>
                  </td>
                  <td className="-ml-12 sm:-ml-0"> {product.price}</td>
                  <td className="text-center">{product.price}</td>
                  <td className="  text-left">${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Cart />
      </div>
    </div>
  );
}
