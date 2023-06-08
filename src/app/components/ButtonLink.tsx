import Image from "next/image";
import Link from "next/link";

interface IButtonLink {
  title: string;
  icon: string;
  href?: string;
}

export const ButtonLink = ({ title, icon, href = "#" }: IButtonLink) => {
  return (
    <Link
      href={href}
      className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
    >
      <Image src={icon} alt={`Icon ${title}`} width={22} height={22} />
      <p className="flex-row font-semibold ">{title}</p>
    </Link>
  );
};
