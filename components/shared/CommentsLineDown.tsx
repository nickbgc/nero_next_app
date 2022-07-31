const CommentsDownLine = ({ current, max }: { current: number; max: number }) =>
  current !== max - 1 ? (
    <span
      className="absolute z-0 top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
      aria-hidden="true"
    />
  ) : null;

export default CommentsDownLine;
