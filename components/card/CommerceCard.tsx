import { CurrencyDollarIcon } from '@heroicons/react/outline';
import Image from 'next/image';

type CommerceCardProps = {
  type: 'merch' | 'experience';
  available: number;
  purchase_reward: number;
  interaction_reward: number;
  title: string;
  image: string;
};

export default function CommerceCard(props: CommerceCardProps) {
  return (
    <div className="col-span-1 bg-light_background">
      <div className="flex flex-col">
        <div className="p-3">
          <div className="relative w-full h-64">
            <Image src={props.image} alt={props.title} layout="fill" />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <h3 className="text-xl font-semibold md:text-2xl">{props.title}</h3>
            <p>Only {props.available} left</p>
            <p className="text-sm text-gray-200">
              Earn {props.purchase_reward}{' '}
              <CurrencyDollarIcon className="w-3 h-3" /> with every purchase
            </p>
          </div>
        </div>
        <div className="gap-2 p-3">
          <h4 className="text-semibold">Share to earn</h4>
          <p className="font-bold">
            {props.interaction_reward}{' '}
            <CurrencyDollarIcon className="w-4 h-4" />
          </p>
        </div>
      </div>
    </div>
  );
}
