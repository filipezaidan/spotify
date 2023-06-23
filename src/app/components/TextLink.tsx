import Link from "next/link";

interface ITextLink {
  title: string;
  href?: string;
}

export const TextLink = ({ title, href = "#" }: ITextLink) => {
  return (
    <Link href={href} className="flex  w-full px-6  ">
      <p className="text-white flex-row font-semibold ">{title}</p>
    </Link>
  );
};
