import { CurrencyDollarIcon } from '@heroicons/react/outline';
import { CommerceCardProps } from 'types';

export default function CommerceCard(props: CommerceCardProps) {
  return (
    <div className="flex-shrink-0 w-full rounded-md md:w-1/2 snap-center bg-light_background">
      <div className="flex flex-col divide-y divide-background">
        <div className="p-3">
          <div className="relative w-full h-64">
            <img
              src={props.image}
              alt={props.title}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <h3 className="text-xl font-semibold md:text-2xl">{props.title}</h3>
            <p>Only {props.available} left</p>
            <div className="flex items-center gap-1 text-sm text-gray-200">
              <p>
                Earn <span className="font-bold">{props.purchase_reward}</span>{' '}
              </p>
              <CurrencyDollarIcon className="w-5 h-5" />{' '}
              <p>with every purchase</p>
            </div>
          </div>
        </div>
        <div className="gap-2 p-3">
          <h4 className="text-semibold">Share to earn</h4>
          <div className="flex items-center gap-1 font-bold">
            {props.interaction_reward}{' '}
            <CurrencyDollarIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
