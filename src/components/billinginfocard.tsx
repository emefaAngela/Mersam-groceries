import Cart from "../app/presentation/shared/cart";

export default function BillingInfoCard() {
  return (
    <div className="w-full h-full m-0">
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1 className="text-3xl">Shop</h1>
        <span>Home / Shopping Cart</span>
      </div>
      <div className="flex sm:flex-row flex-col  sm:space-x-36  space-y-8   w-full sm:items-center sm:mx-auto mx-auto justify-center  mb-16">
        <div className="flex sm:w-1/3 w-full flex-col">
          <div className="text-2xl font-semibold mb-8">Billing Details</div>
          <div>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col  sm:flex-row sm:space-x-4">
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium">First Name</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-2"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium">Last Name</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">City</div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Address</div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Phone</div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
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
