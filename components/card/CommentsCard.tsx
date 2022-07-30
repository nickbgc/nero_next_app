import { ChatAltIcon } from '@heroicons/react/solid';

type CommentCardProps = {
  author: {
    name: string;
    avatar: string;
  };
  comment: string;
  date: number;
};

export function CommentCard(props: CommentCardProps) {
  return (
    <>
      <div className="relative">
        <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
          <ChatAltIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div>
          <div className="text-sm">
            <a href={props.author.avatar} className="font-medium text-gray-900">
              {props.author.name}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Commented {props.date}</p>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <p>{props.comment}</p>
        </div>
      </div>
    </>
  );
}
