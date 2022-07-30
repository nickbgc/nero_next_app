import {
  BellIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

type PostProps = {
  type: 'video' | 'announcement' | 'poll' | 'text';
  text: string;
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  interaction_reward: number;
  poll_options?: string[];
};

export default function Post(props: PostProps) {
  return (
    <div className="w-full p-4 text-white">
      <div className="py-2">
        {props.type === 'announcement' && (
          <div className="flex space-x-4">
            <BellIcon className="w-4 h-4" />
            <p className="font-semibold">Announcements &bull; See more</p>
          </div>
        )}
        {props.type === 'poll' && (
          <div className="font-semibold">
            <ChartBarIcon className="w-4 h-4" />
            <p className="font-semibold">This week&#39;s Poll</p>
          </div>
        )}
      </div>
      <div className="py-2">
        {
          /*Text Post Type*/
          props.type === 'text' && (
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative w-8 h-8">
                  <Image
                    src={props.user.avatar}
                    layout="fill"
                    alt={props.user.name}
                  />
                  <p className="pl-4 font-bold text-white">{props.user.name}</p>
                </div>
              </div>
            </div>
          )
        }
        {
          /*Poll Post Type*/
          props.type === 'poll' && (
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative w-8 h-8">
                  <Image
                    src={props.user.avatar}
                    layout="fill"
                    alt={props.user.name}
                  />
                </div>
                <p className="pl-4 font-bold text-white">{props.text}</p>
              </div>
              <div className="flex flex-col gap-4">
                {props.poll_options?.map((option) => {
                  const progress = Math.floor(Math.random() * 100);
                  return (
                    <div className="flex" key={option}>
                      <div className="w-full h-6 rounded-full bg-light_background">
                        <div
                          className="h-6 rounded-full bg-sidebar-background "
                          style={{ width: `${progress}%` }}
                        >
                          <p className="text-white">{option}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        }
        {
          /*Text Post Type*/
          props.type === 'video' && (
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
          )
        }
      </div>
    </div>
  );
}
