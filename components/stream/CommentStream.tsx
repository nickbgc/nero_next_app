import { CommentCard } from 'components/card/CommentsCard';
import CommentsDownLine from 'components/shared/CommentsLineDown';

export default function CommentStream({ comments }: { comments: Array<any> }) {
  return (
    <div className="flow-root">
      <div className="py-4">
        <h2 className="font-semibold text-white">
          Comments ({comments?.length})
        </h2>
      </div>
      <ul role="list" className="px-4 py-8">
        {comments?.map((commentsItem, commentsItemIdx) => (
          <li key={commentsItem.id}>
            <div className="relative pb-8">
              <CommentsDownLine
                current={commentsItemIdx}
                max={comments.length}
              />

              <div className="relative flex items-start space-x-3">
                <CommentCard {...commentsItem} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
