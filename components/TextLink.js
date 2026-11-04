export default function TextLink(props) {
  if (!props.link) return <span>{props.children}</span>;
  return (
    <>
      <a
        className="cursor-pointer border-dotted hover:bg-[#4C5BFF]/10 px-[2px] hover:text-[#4C5BFF] pt-[2px] dotted-underline"
        target={props.sameTab ? '' : '_blank'}
        rel="noreferrer"
        href={props.link}
      >
        {props.children}
      </a>
    </>
  );
}
