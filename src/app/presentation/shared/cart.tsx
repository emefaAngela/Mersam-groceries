export default function Cart() {
  return (
    <div className="flex flex-col w-72 h-96 space-y-4 border border-1 border-gray-200 rounded-lg items-center justify-center py-4">
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
      <div className="bg-green-600 text-white text-center rounded-4xl px-6 py-2">
        Proceed to Checkout
      </div>
    </div>
  );
}
