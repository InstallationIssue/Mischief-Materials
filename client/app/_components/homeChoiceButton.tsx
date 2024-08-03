import Link from "next/link";

export default function HomeChoiceButton({
  text,
  hyperlink,
}: {
  text: string;
  hyperlink: string;
}) {
  return (
    <Link
      href={hyperlink}
      className="flex items-center text-center justify-center border-2 bg-opacity-50 px-8 min-w-40 w-2/5 bg-secondary-dark rounded-lg backdrop-blur-sm h-1/2 font-header text-3xl"
    >
      {text}
    </Link>
  );
}
