import CommerceCard from 'components/card/CommerceCard';
import SidebarLayout from 'layouts/SidebarLayout';
import { CommerceCardProps } from 'types';

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

export default function Community() {
  return (
    <SidebarLayout title={'Community Store'}>
      <div className="text-gray-200 divide-y divide-light_background">
        <div className="p-4 py-12">
          <h2 className="text-3xl font-bold text-white">
            Exclusive Merchandise
          </h2>
          <div className="grid grid-cols-1 mt-8 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {merch_data.map((data, index) => (
              <CommerceCard key={index} {...data} inGrid={true} />
            ))}
          </div>
          <div className="flex justify-center pt-8">
            <p>View more in store</p>
          </div>
        </div>
        <div className="p-4 py-12">
          <h2 className="text-3xl font-bold text-white">
            Exclusive Experiences
          </h2>
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
    </SidebarLayout>
  );
}
