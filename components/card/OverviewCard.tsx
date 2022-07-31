export default function OverviewCard() {
  return (
    <div className="px-3 rounded-md md:p-6 bg-light_background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white lg:text-4xl">
          Overview
        </h1>
      </div>
      <div className="grid grid-cols-1 pt-8 md:grid-cols-2">
        <div className="col-span-1 md:grid-cols-">
          <div className="flex items-center gap-4">
            <img
              src={'https://i.pravatar.cc/300'}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-bold text-gray-200">AARON WATT</p>
          </div>
          <div className="py-2">
            <p className="text-gray-200">Current Level:</p>
          </div>
          <div className="py-2">
            <h2 className="text-4xl font-bold text-yellow-400 lg:text-6xl">
              GOLD
            </h2>
          </div>
          <div className="py-2">
            <p className="text-gray-200">
              Your next level:{' '}
              <span className="font-boldctext-white">Platinum</span>
            </p>
          </div>
          <div className="py-2">
            <div className="w-full rounded-full bg-background">
              <div className="w-2/3 p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
            </div>
          </div>
          <div className="py-2">
            <p className="text-gray-200">You&#39;re 1980 $NOMIC away.</p>
          </div>
        </div>
        <div className="items-center justify-center hidden col-span-1 md:flex">
          <img
            src="/gold-coin.png"
            alt="avatar"
            className="w-48 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
