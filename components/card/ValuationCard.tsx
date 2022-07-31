export default function ValuationCard() {
  return (
    <div className="p-4 bg-card-background">
      <h3 className="text-xl font-bold text-center text-white">Valuation</h3>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex justify-center py-2">
          <p className="text-gray-200">
            Value of Membership : $87.90 (201 $NOMIC)
          </p>
        </div>
      </div>
      <div className="py-4">
        <button className="w-full px-8 py-2 text-white border border-orange-500 rounded-full ">
          Sell Membership
        </button>
      </div>
    </div>
  );
}
