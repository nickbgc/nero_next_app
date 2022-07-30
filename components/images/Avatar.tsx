export default function Avatar(props: { src: string; alt: string }) {
  return (
    <div className="relative">
      <img
        src={props.src}
        alt={props.alt}
        className="w-[8.5rem] rounded-full"
      />
    </div>
  );
}
