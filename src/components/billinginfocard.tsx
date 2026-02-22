import Cart from "../app/presentation/shared/cart";

export default function BillingInfoCard() {
  return (
    <div className="w-full h-full m-0">
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1 className="text-3xl">Shop</h1>
        <span>Home / Shopping Cart</span>
      </div>
      <div className="flex flex-row justify-between mx-24">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold">Billing Details</div>
          <div>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-4">
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium">First Name</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium">Last Name</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">City</div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Address</div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Phone</div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </form>
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
}
