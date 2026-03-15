import { useEffect } from "react";
import { verifyPayment } from "../../../hooks/usePayment";
import { createOrder } from "../../../hooks/useOrder";
import { useSelector } from "react-redux";

export default function OrderSuccess() {
  const cartItems = useSelector((state: any) => state.checkout.cartProducts);
  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(window.location.search);
      const reference = params.get("reference");

      if (!reference) return;

      const data = await verifyPayment(reference);

      if (data?.data?.status === "success") {
        console.log("Payment verified successfully:", data);

        await createOrder(
          1,
          data.data.amount,
          cartItems,
          data.data,
          new Date(data.data.paid_at),
        );
        if (data) {
          console.log("Order created successfully:", data);
        } else {
          console.error("Order creation failed");
        }
      } else {
        console.error("Payment verification failed:", data);
      }
    };

    verify();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center  bg-black opacity-50 fixed  z-40">
      <div className=" flex flex-col space-y-4 items-center z-50 bg-gray-300 p-6  justify-center rounded-lg">
        <div className="text-2xl font-semibold text-green-600">
          Order Successful!
        </div>
        <div className="text-lg text-gray-700">
          Thank you for your purchase. Your order has been placed successfully.
        </div>
      </div>
    </div>
  );
}
