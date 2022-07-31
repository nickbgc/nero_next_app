import { CommentCard } from 'components/card/CommentsCard';
import CommentsDownLine from 'components/shared/CommentsLineDown';

const activity = [
  {
    id: 1,
    author: {
      name: 'Eduardo Benz',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '3 hours ago',
  },
  {
    id: 2,
    author: {
      name: 'Eduardo Benz',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '10 min ago',
  },
  {
    id: 3,
    author: {
      name: 'Eduardo Benz',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: 'an hour ago',
  },
];

export default function CommentStream() {
  return (
    <div className="flow-root">
      <div className="py-4">
        <h2 className="font-semibold text-white">
          Comments ({activity.length})
        </h2>
      </div>
      <ul role="list" className="px-4 py-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              <CommentsDownLine
                current={activityItemIdx}
                max={activity.length}
              />

              <div className="relative flex items-start space-x-3">
                <CommentCard {...activityItem} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
