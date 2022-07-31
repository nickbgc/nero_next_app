import EarnCard from 'components/card/EarnCard';
import OverviewCard from 'components/card/OverviewCard';
import SpendCard from 'components/card/SpendCard';
import SwapCard from 'components/card/SwapCard';
import ValuationCard from 'components/card/ValuationCard';
import SidebarLayout from 'layouts/SidebarLayout';

export default function Token() {
  return (
    <SidebarLayout title="Token">
      <div className="py-6">
        <div className="px-4">
          <OverviewCard />
        </div>
      </div>
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <EarnCard />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <SpendCard />
          </div>
        </div>
      </div>
      <div className="px-4 py-6">
        <SwapCard />
      </div>
      <div className="px-4 py-6">
        <ValuationCard />
      </div>
    </SidebarLayout>
  );
}
