export default function ProductDetails() {
  return (
    <div className="w-full h-full m-0">
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1>Shop</h1>
        <span>Home / Shop / Product name / Product Details</span>
      </div>
      <div className="flex flex-col justify-center items-center m-24">
        <div className="flex flex-row space-x-10">
          <div className="border border-0.5 border-gray-500">
            <img className="" />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-green-400">Fruits</div>
            <div className="flex flex-row space-x-2">
              <div className="text-2xl">Fresh Green Apple</div>
              <div className="text-green-600 bg-green-100 py-0.5 px-2 border rounded-full">In stock</div>
            </div>
            <div>$15</div>
            <div className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, quae.</div>
            <div className="flex flex-row space-x-3">
              <div className="flex flex-row space-x-2 px-2 py-0.5 border rounded-full">
                <div>-</div>
                <div>0</div>
                <div>+</div>
              </div>
              <div className="bg-green-700 text-white rounded-full pt-1.5 text-xs px-2 py-0.5 text-center">Add to cart</div>
              <div className="bg-yellow-500 text-black rounded-full pt-1.5 text-xs px-2 py-0.5 text-center">Buy now</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
