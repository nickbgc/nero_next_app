import CommerceCard from 'components/card/CommerceCard';
import SidebarLayout from 'layouts/SidebarLayout';
import { CommerceCardProps } from 'types';
import { Tab } from '@headlessui/react';
import Post from 'components/card/Post';
import shop from '../../data/shop.json';
import featured from '../../data/featured.json';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const merch_data: Array<CommerceCardProps> = shop.map((i) => ({
  ...i,
  type: 'merch',
}));

const experience_data: Array<CommerceCardProps> = shop.map((i) => ({
  ...i,
  type: 'experience',
}));

const data: Array<any> = featured.map((f, i) => ({
  ...f,
  type: 'video',
  user: f.comments && f.comments[i]?.author,
  interaction_reward: f.pointsval,
  text: f.title,
}));

const Feed = () => {
  return (
    <div className="w-full divide-y divide-light_background">
      {data.map((post, index) => (
        <Post key={post.type + index} {...post} />
      ))}
      <div />
    </div>
  );
};

const Commerce = () => (
  <div className="text-gray-200 divide-y divide-light_background">
    <div className="">
      <h2 className="text-3xl font-bold text-white">Exclusive Merchandise</h2>
      <div className="grid grid-cols-1 mt-4 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {merch_data.map((data, index) => (
          <CommerceCard key={index} {...data} inGrid={true} />
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <p>View more in store</p>
      </div>
    </div>
    <div className="p-4 py-12">
      <h2 className="text-3xl font-bold text-white">Exclusive Experiences</h2>
      <div className="grid grid-cols-1 mt-8 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {experience_data.map((data, index) => (
          <CommerceCard key={index} {...data} inGrid={true} />
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <p>View more in store</p>
      </div>
    </div>
  </div>
);

export default function Community() {
  return (
    <SidebarLayout title={'Community Store'}>
      <div className="w-full px-4 py-4">
        <Tab.Group>
          <Tab.List className="flex w-full space-x-1 border-b border-light_background">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 ',
                  'focus:outline-none',
                  selected
                    ? 'border-b-8 border-light_background shadow font-semibold text-white'
                    : 'text-gray-200',
                )
              }
            >
              Featured
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  'focus:outline-none',
                  selected
                    ? 'border-b-8 border-light_background shadow font-semibold text-white'
                    : 'text-gray-200',
                )
              }
            >
              Community
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 ',
                  'focus:outline-none',
                  selected
                    ? 'border-b-8 border-light_background shadow font-semibold text-white'
                    : 'text-gray-200',
                )
              }
            >
              Store
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel className={classNames('rounded-xl')}>
              <Feed />
            </Tab.Panel>
            <Tab.Panel className={classNames('rounded-xl')}>
              <Link href={'/app/discussion'}>
                <a>
                  <img
                    className="w-full h-auto"
                    src="/community.jpeg"
                    alt="discussion"
                  />
                </a>
              </Link>
            </Tab.Panel>
            <Tab.Panel
              className={classNames('rounded-xl', 'focus:outline-none ')}
            >
              <Commerce />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </SidebarLayout>
  );
}
