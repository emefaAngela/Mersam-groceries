
export default function SignInModal({isOpen, onClose}) {
  
  return (
    <div className="w-full h-full flex justify-center items-center  bg-black opacity-50 fixed  z-40">
      <div className=" flex flex-col space-y-4 items-center z-50 bg-gray-300 p-6  justify-center rounded-lg">
        <div
          className="w-8 h-8 rounded-full absolute top-52 left-[890px] flex items-center justify-center bg-amber-300 text-black"
          onClick={onClose}>
          X
        </div>
        <div className="text-2xl font-semibold text-black">Sign In</div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Email</div>
          <input
            type="text"
            placeholder="Email"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Password</div>
          <input
            type="password"
            placeholder="Password"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="bg-green-800 text-white px-8 py-2 rounded-full cursor-pointer">Sign In</div>

      </div>
    </div>
  );
}
