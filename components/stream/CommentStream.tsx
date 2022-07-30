import { CommentCard } from 'components/card/CommentsCard';
import CommentsDownLine from 'components/shared/CommentsLineDown';

const activity = [
  {
    id: 1,
    author: {
      name: 'Eduardo Benz',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: new Date().getTime(),
  },
];

export default function CommentStream() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
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
