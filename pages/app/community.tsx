import CommerceCard from 'components/card/CommerceCard';
import SidebarLayout from 'layouts/SidebarLayout';
import { CommerceCardProps } from 'types';
import { Tab } from '@headlessui/react';
import { PostProps } from 'types';
import Post from 'components/card/Post';

const data: Array<PostProps> = [
  {
    type: 'announcement',
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/300?img=3',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '1 hour ago',
    interaction_reward: 4,
  },
  {
    type: 'video',
    user: {
      name: 'John Doe',
      avatar: 'https://www.youtube.com/watch?v=TdofGK2jY88',
    },
    text: 'Vegas Highlights',
    date: '1 hour ago',
    interaction_reward: 4,
  },
  {
    type: 'section',
    section: {
      title: 'Trending Merchandise',
      more_button_text: 'View more in store',
      type: 'merch',
      items: [
        {
          type: 'merch',
          available: 10,
          purchase_reward: 4,
          interaction_reward: 4,
          title: 'Lorem ipsum dolor sit amet',
          image: 'https://i.pravatar.cc/300?img=1',
        },
        {
          type: 'merch',
          available: 10,
          purchase_reward: 4,
          interaction_reward: 4,
          title: 'Nero Tour Shirt',
          image: 'https://i.pravatar.cc/300?img=4',
        },
        {
          type: 'experience',
          available: 10,
          purchase_reward: 4,
          interaction_reward: 4,
          title: 'Dinner before the show',
          image: 'https://i.pravatar.cc/300?img=12',
        },
        {
          type: 'experience',
          available: 10,
          purchase_reward: 4,
          interaction_reward: 4,
          title: 'VIP Experience',
          image: 'https://i.pravatar.cc/300?img=10',
        },
      ],
    },
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/300?img=2',
    },
    interaction_reward: 0,
    text: '',
  },
  {
    type: 'poll',
    text: 'We want to thank everyone who came out yesterday, what a show!',
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    date: '35 min ago',
    poll_options: ['Marshamallow', 'Chris Lake', 'Tiesto', 'deadmau5'],
    interaction_reward: 2,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const merch_data: Array<CommerceCardProps> = [
  {
    type: 'merch',
    available: 18,
    purchase_reward: 9,
    interaction_reward: 4,
    title: 'Nero Rose Package',
    image:
      'https://images.pexels.com/photos/5272964/pexels-photo-5272964.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'merch',
    available: 5,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'Nero Hair Conditioner',
    image:
      'https://images.pexels.com/photos/7428103/pexels-photo-7428103.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'merch',
    available: 30,
    purchase_reward: 2,
    interaction_reward: 7,
    title: 'Nero Shopping Bag',
    image:
      'https://images.pexels.com/photos/3807781/pexels-photo-3807781.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'merch',
    available: 23,
    purchase_reward: 1,
    interaction_reward: 3,
    title: 'Nero Tour Shirt',
    image:
      'https://images.pexels.com/photos/2356344/pexels-photo-2356344.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'merch',
    available: 10,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'Nero Designer Handbag',
    image:
      'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'merch',
    available: 10,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'Nero Tour Slim Fit',
    image:
      'https://images.pexels.com/photos/1030823/pexels-photo-1030823.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const experience_data: Array<CommerceCardProps> = [
  {
    type: 'experience',
    available: 9,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'Nero Grand Piano Session',
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-49856654/original/fa4d3ea2-1544-4b4d-b6fe-e5a025f14543.jpeg?im_w=720',
  },
  {
    type: 'experience',
    available: 1,
    purchase_reward: 98,
    interaction_reward: 40,
    title: 'Catching up with Gregg',
    image:
      'https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'experience',
    available: 10,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'VIP Street Theatre',
    image:
      'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'experience',
    available: 12,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'Dinner before the show',
    image:
      'https://images.pexels.com/photos/1267321/pexels-photo-1267321.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'experience',
    available: 31,
    purchase_reward: 2,
    interaction_reward: 10,
    title: 'Friends with Celebs',
    image:
      'https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'experience',
    available: 10,
    purchase_reward: 4,
    interaction_reward: 4,
    title: 'VIP Business Expo',
    image:
      'https://images.pexels.com/photos/3611077/pexels-photo-3611077.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

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
          <Tab.List className="flex w-full p-1 space-x-1 rounded-xl bg-light_background">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-background',
                  'focus:outline-none',
                  selected
                    ? 'bg-white shadow font-semibold'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                )
              }
            >
              Feed
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-background',
                  'focus:outline-none',
                  selected
                    ? 'bg-white shadow font-semibold'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
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
