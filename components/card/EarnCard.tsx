export default function EarnCard() {
  return (
    <div className="px-4 rounded-md bg-card-background">
      <div className="flex items-end justify-end w-full h-64">
        <img src="/earn.png" alt="Gold bars" className="h-48 " />
      </div>
      <div className="py-4">
        <h3 className="text-xl font-bold text-white">
          Explore ways to <span className="text-orange-500">Earn</span>
        </h3>
        <p className="py-1 text-gray-200">Earn $NOMIC to level up.</p>
      </div>
    </div>
  );
}
