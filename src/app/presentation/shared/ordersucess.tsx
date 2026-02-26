export default function OrderSuccess() {
  return (
    <div className="w-full h-full flex justify-center items-center  bg-black opacity-50 fixed  z-40">
      <div className=" flex flex-col space-y-4 items-center z-50 bg-gray-300 p-6  justify-center rounded-lg">
        <div className="text-2xl font-semibold text-green-600">Order Successful!</div>
        <div className="text-lg text-gray-700">Thank you for your purchase. Your order has been placed successfully.</div>
      </div>
    </div>
  );
}