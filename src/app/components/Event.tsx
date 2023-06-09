import Image from "next/image";
import Link from "next/link";

interface IEventCard {
  title: string;
  author: string;
  img: string;
}

export const EventCard = ({ title, author, img }: IEventCard) => {
  return (
    <button className="flex rounded-md flex-col justify-center w-56 h-auto p-5 bg-zinc-800 gap-6">
      <Image
        className="rounded-xl"
        width={240}
        height={240}
        src={img}
        alt="Image from show"
      />
      <div className="flex items-start flex-col gap-1">
        <span className="font-medium text-xl">{title}</span>
        <span className="">{author}</span>
      </div>
    </button>
  );
};

export const Events = () => {
  return (
    <div className="flex w-full flex-col gap-7 ">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">Shows you might like</h3>
        <Link href="#">
          <span className="text-zinc-400 font-bold">See all</span>
        </Link>
      </div>

      <div className="grid grid-flow-row grid-cols-5 gap-y-3">
        <EventCard
          title="Weekly Motivatio..."
          author="Ben Ina Scott"
          img="./events/1.svg"
        />
        <EventCard
          title="MEDITATION SELF"
          author="Samuel Scott"
          img="./events/2.svg"
        />
        <EventCard
          title="The Alexa Show"
          author="Ibn Hussain Aleen"
          img="./events/3.svg"
        />
        <EventCard
          title="The Stories of Ma..."
          author="Adriana Tom"
          img="./events/4.svg"
        />
        <EventCard
          title="Motivation Daily b..."
          author="Lexus"
          img="./events/5.svg"
        />
        <EventCard
          title="Words beyond act..."
          author="Georgina Martha"
          img="./events/6.svg"
        />
      </div>
    </div>
  );
};
