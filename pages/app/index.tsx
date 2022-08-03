import Post from 'components/card/Post';
import SidebarLayout from 'layouts/SidebarLayout';

const data = [
  {
    file: 'yAs25IAm1Wc',
    type: 'video',
    hidden: 'Fan View',
    date: '8/1/2022',
    pointsval: 5,
    comments: [
      {
        text: "This song always gets me. It's my senior year breakup song",
        author: {
          name: 'SebastianR',
          avatar: 'https://i.pravatar.cc/300?img=12',
        },
      },
      {
        text: "Nobody's ever broken up with me :)",
        author: {
          name: 'Celine',
          avatar: 'https://i.pravatar.cc/300?img=15',
        },
      },
    ],
  },
  {
    file: '/CONCERTS/Copy of Copy of Nero-17.jpg',
    hidden: 'Fan stage',
    type: 'video',
    filetype: 'image',
    date: '8/1/2022',
    pointsval: 5,
    comments: [
      {
        text: 'Anyone seen this several times live? Is it always this good? Amazing',
        author: {
          name: 'NeroMan',
          avatar: 'https://i.pravatar.cc/300?img=17',
        },
      },
      {
        text: 'Yes and YES',
        author: {
          name: 'ClackClack',
          avatar: 'https://i.pravatar.cc/300?img=18',
        },
      },
    ],
  },
  {
    file: 'a_Cp_7bynBQ',
    type: 'video',
    hidden: 'Fan video',
    date: '8/1/2022',
    pointsval: 5,
    comments: [
      {
        id: 1,
        text: 'I was there!',
        author: {
          name: 'ClackClack',
          avatar: 'https://i.pravatar.cc/300?img=23',
        },
      },
      {
        id: 2,
        text: "You're so lucky. I was supposed to go to that show but got Covid.",
        author: {
          name: 'You_And_Me',
          avatar: 'https://i.pravatar.cc/300?img=3',
        },
      },
      {
        id: 3,
        text: 'The lights were incredible, and I could feel my kidneys shake on the drops!',
        author: {
          name: 'TaylorM',
          avatar: 'https://i.pravatar.cc/300?img=4',
        },
      },
    ],
  },
  {
    file: '/CONCERTS/Copy of 20220101-_DSC5269.jpg',
    hidden: 'Fan Stage',
    type: 'video',
    date: '8/1/2022',
    pointsval: 5,
    filetype: 'image',
    comments: [
      {
        id: 1,
        text: 'This looks just like the show in Barcelona. ',
        author: {
          name: 'AlwaysOn',
          avatar: 'https://i.pravatar.cc/300?img=6',
        },
      },
      {
        id: 2,
        text: "There's the girl of my dreams. Front row.",
        author: {
          name: 'Greg',
          avatar: 'https://i.pravatar.cc/300?img=7',
        },
      },
    ],
  },
  {
    file: 'uVHpyZzwmnQ',
    type: 'video',
    hidden: 'Fan view Front row',
    date: '8/1/2022',
    pointsval: 5,
    comments: [
      {
        id: 1,
        text: 'Is there a full recording of the concert available? Can someone let me know?',
        author: {
          name: 'MabelMay',
          avatar: 'https://i.pravatar.cc/300?img=8',
        },
      },
      {
        id: 2,
        text: 'I think it will be pay-per-view here soon',
        author: {
          name: 'Thereze',
          avatar: 'https://i.pravatar.cc/300?img=9',
        },
      },
      {
        id: 3,
        text: "Lit. I'm definitely buying it",
        author: {
          name: 'MabelMay',
          avatar: 'https://i.pravatar.cc/300?img=8',
        },
      },
    ],
  },
];

export const Frame = () => {
  return (
    <div className="w-full divide-y divide-light_background">
      {data.map((post, index) => (
        // @ts-ignore
        <Post key={post.type + index} {...post} />
      ))}
      <div />
    </div>
  );
};

export default function Explore() {
  return (
    <SidebarLayout title={'Explore'}>
      <Frame />
    </SidebarLayout>
  );
}
