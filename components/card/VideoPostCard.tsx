import { CurrencyDollarIcon } from '@heroicons/react/outline';

type VideoPostCardProps = {
  text: string;
  interaction_reward: number;
};

export default function VideoPostCard(props: VideoPostCardProps) {
  return (
    <div className="relative flex flex-col">
      <div className="absolute inset-0 flex w-full h-full"></div>
      <div className="bottom-0 left-0 w-full h-auto py-4 bg-gradient-to-t from-black">
        <div className="flex flex-col divide-y">
          <p className="py-1 text-2xl font-bold">{props.text}</p>
          <p className="py-1">View to Earn</p>
          <p className="py-1">
            {props.interaction_reward}{' '}
            <CurrencyDollarIcon className="w-4 h-4 text-orange-500" />
          </p>
        </div>
      </div>
    </div>
  );
}
