type CommentCardProps = {
  author: {
    name: string;
    avatar: string;
  };
  text: string;
  date: string;
};

export function CommentCard(props: CommentCardProps) {
  return (
    <>
      <div className="relative bg-background z-1">
        <img
          src={props.author.avatar}
          alt={props.author.name}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="">
          <div className="text-sm">
            <a href={props.author.avatar} className="font-medium text-gray-50">
              {props.author.name}
            </a>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-100">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}
