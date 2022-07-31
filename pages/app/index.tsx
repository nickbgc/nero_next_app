import Post from 'components/card/Post';
import SidebarLayout from 'layouts/SidebarLayout';
import { PostProps } from 'types';

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

export default function Explore() {
  return (
    <SidebarLayout title={'Explore'}>
      <div className="w-full divide-y divide-light_background">
        {data.map((post, index) => (
          <Post key={post.type + index} {...post} />
        ))}
        <div />
      </div>
    </SidebarLayout>
  );
}
