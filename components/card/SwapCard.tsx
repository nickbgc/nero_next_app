export default function SwapCard() {
  return (
    <div className="p-4 rounded-md bg-card-background">
      <h3 className="text-xl font-bold text-center text-white">
        Swap your $NOMIC Balance
      </h3>
      <div className="relative flex flex-col mt-6">
        <div className="relative">
          <input className="w-full p-4 rounded-full bg-card-light_background" />
          <div className="absolute bottom-0 flex items-center w-auto h-full right-2">
            <p className="p-2 font-medium text-white rounded-full bg-background">
              $NOMIC
            </p>
          </div>
        </div>
        <div className="relative mt-4">
          <input className="w-full p-4 rounded-full bg-card-light_background" />
          <div className="absolute bottom-0 flex items-center w-auto h-full right-2">
            <p className="px-4 py-2 font-medium text-white rounded-full bg-background">
              Select a token
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-full ">
            Swap Tokens
          </button>
        </div>
      </div>
    </div>
  );
}
