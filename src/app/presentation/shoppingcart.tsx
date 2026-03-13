import Cart from "./shared/cart";
import { useSelector } from "react-redux";
import type { CartItem } from "../../../utils/types";
import { TrashIcon } from "lucide-react";
import { removefromCart } from "../../../utils/checkoutSlice";
import { useDispatch } from "react-redux";

export default function ShoppingCart() {
  const cartItems = useSelector((state: any) => state.checkout.cartProducts);
  const cartLength = useSelector(
    (state: any) => state.checkout.cartProducts.length,
  );
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full m-0 sm:m-auto">
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1 className="text-3xl">Shop</h1>
        <span>Home / Shopping Cart</span>
      </div>
      <div className="flex sm:flex-row  w-full  text-xs sm:text-sm flex-col space-y-8  sm:justify-between   items-center justify-center mb-16">
        <div className="flex">
          <table>
            <thead className="bg-yellow-300 h-12 rounded-lg flex flex-row px-4 py-1 space-x-8  sm:space-x-42 justify-center items-center font-semibold">
              <tr>Product</tr>
              <tr>Price</tr>
              <tr>Quantity</tr>
              <tr>Subtotal</tr>
              <tr>Action</tr>
            </thead>
            <tbody className="flex flex-col space-y-2">
              {cartItems.map((item: CartItem) => (
                <tr
                  key={item.product?.id}
                  className="flex flex-row justify-between   sm:px-4 py-2 border-b"
                >
                  <td className="flex ml-2 sm:flex-row text-center flex-col space-x-1">
                    <div className="sm:w-16 sm:h-16 h-12 w-12 p-2 border border-0.5 border-gray-200 rounded-md flex justify-center items-center">
                      <img
                        src={item.product?.image}
                        className="sm:w-16 sm:h-16 "
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="font-semibold text-md">
                        {item?.product?.name}
                      </div>
                      {/* <div>{product.price}</div> */}
                    </div>
                  </td>
                  <td className="-ml-8 sm:-ml-16 flex ">
                    {" "}
                    {item?.product?.price}
                  </td>
                  <td className="-ml-8 sm:-ml-8 text-center">
                    {item?.quantity}
                  </td>
                  <td className="-ml-6 sm:-ml-4 text-left">
                    ${item?.product?.price * item?.quantity}
                  </td>
                  <td className="text-center mr-4 flex">
                    <TrashIcon
                      className="w-4 h-4"
                      onClick={() => {
                        dispatch(removefromCart(item.product));
                      }}
                    />
                  </td>
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
