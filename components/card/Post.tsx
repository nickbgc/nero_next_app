import {
  BellIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline';
import Avatar from 'components/images/Avatar';
import { PostProps } from 'types';
import YouTube from 'react-youtube';
import CommerceCard from './CommerceCard';
import Link from 'next/link';

export default function Post(props: PostProps) {
  return (
    <div className="w-full p-4 text-white">
      <Link href="/app/content">
        <a className="w-full">
          <div className="py-2">
            {props.type === 'announcement' && (
              <div className="flex items-center space-x-4 text-gray-300">
                <BellIcon className="w-4 h-4" />
                <p className="text-sm font-medium">
                  Announcements &bull; See more
                </p>
              </div>
            )}
            {props.type === 'poll' && (
              <div className="flex items-center gap-4 font-medium text-gray-200">
                <ChartBarIcon className="w-4 h-4" />
                <p className="text-sm font-medium">This week&#39;s Poll</p>
              </div>
            )}
            {props.type === 'section' && (
              <div className="w-full pt-4 pl-2">
                <div className="flex w-full gap-4 overflow-x-scroll snap-mandatory snap-x flex-nowrap hide-scrollbar">
                  {props.section?.items.map((item, index) => (
                    <CommerceCard key={index} {...item} />
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <p>{props.section?.more_button_text}</p>
                </div>
              </div>
            )}
          </div>
          <div className="py-2">
            {
              /*Text Post Type*/
              props.type === 'announcement' && (
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="relative">
                      <Avatar src={props.user.avatar} alt={props.user.avatar} />
                    </div>
                    <p className="pl-4 text-gray-200">{props.text}</p>
                  </div>
                </div>
              )
            }
            {
              /*Poll Post Type*/
              props.type === 'poll' && (
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={props.user.avatar}
                        alt={props.user.name}
                        className="w-12 rounded-full"
                      />
                    </div>
                    <p className="pl-4 font-bold text-white">{props.text}</p>
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    {props.poll_options?.map((option) => {
                      // @ts-ignore
                      const progress = Math.floor(Math.random(Math.ceil) * 100);
                      return (
                        <div className="flex" key={option}>
                          <div className="w-full border rounded-full border-light_background">
                            <div
                              className="px-3 py-1 rounded-full bg-sidebar-background "
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
              /*Video Post Type*/
              props.type === 'video' && (
                <div className="relative flex flex-col">
                  <div className="flex w-full h-[28rem] ">
                    <YouTube
                      opts={{ width: '100%', height: '100%' }}
                      videoId="1FEVbW9a3Jk"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bottom-0 left-0 w-full h-auto max-w-md py-4 ">
                    <div className="flex flex-col text-gray-200 divide-y divide-light_background">
                      <p className="py-1 text-2xl font-bold text-white lg:text-4xl">
                        {props.text}
                      </p>
                      <p className="py-1">View to Earn</p>
                      <div className="flex items-center gap-2 py-2">
                        <p className="text-xl font-bold">
                          {props.interaction_reward}{' '}
                        </p>
                        <CurrencyDollarIcon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </a>
      </Link>
    </div>
  );
}
