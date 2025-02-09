import Image from "next/image";
import { cn } from "../lib/utils";
import { Marquee } from "./utils/marquee";

const reviews = [
  {
    name: "Alex Johnson",
    username: "@alexj",
    body: "This experience exceeded my expectations in every way. Incredible work!",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Sophia Martinez",
    username: "@sophia.m",
    body: "I'm blown away by the quality. It's been such a game-changer for me!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Michael Lee",
    username: "@mikelee",
    body: "Absolutely stunning! I can't believe how easy and intuitive this is.",
    img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Emily Carter",
    username: "@emily.c",
    body: "The attention to detail here is incredible. Hats off to the team!",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Liam Brown",
    username: "@liamb",
    body: "Simply outstanding. I’ve never been this impressed before!",
    img: "https://images.unsplash.com/photo-1562564055-b42b8a4e59b7?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Olivia Wilson",
    username: "@livwilson",
    body: "This is innovation at its finest. Truly remarkable!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3000&auto=format&fit=crop",
  },
];
const reviews2 = [
  {
    name: "Daniel Kim",
    username: "@danielk",
    body: "Wow, just wow. It’s hard to believe something like this even exists.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Mia Davis",
    username: "@miad",
    body: "This has made my life so much easier. Can't recommend it enough!",
    img: "https://images.unsplash.com/photo-1535720516272-a2348f8d79e5?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Ethan Thomas",
    username: "@ethan.t",
    body: "Mind-blowing experience! I’m officially a fan for life.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Ava Robinson",
    username: "@ava.robinson",
    body: "Hands down the best thing I've come across this year. Exceptional.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Noah White",
    username: "@noahw",
    body: "Phenomenal in every sense. Keep up the amazing work!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3000&auto=format&fit=crop",
  },
  {
    name: "Isabella Lopez",
    username: "@bella.l",
    body: "I’m completely in awe. This sets a new standard of excellence.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=3000&auto=format&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews2.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 lg:w-80 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        " bg-gradient-to-r from-black/15 to-purple/20  shadow-2xl shadow-black/30 border-2 border-pink200/70 hover:",
        " hover:scale(105) animate-marquee text-white"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <Image
          height={35}
          width={35}
          className="rounded-full w-10 h-10 lg:w-14 lg:h-14 object-cover shadow-xl shadow-pink200/20 border border-pink200"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium font-medium-fgm">
            {name}
          </figcaption>
          <p className="text-xs font-medium font-medium-kgpr">{username}</p>
          <span className="text-yellow-400 text-xs mt-2"> ★ ★ ★ ★ ★</span>

        </div>
      </div>
      <blockquote className="mt-2 text-xs lg:text-sm font-medium-kgpr">
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeWrapper2() {
  return (
    <div className="relative flex  max-w-[1920px] bg-gradient-to-tr  w-full flex-col items-center justify-center  rounded-lg   ">
      <Marquee pauseOnHover className=" lg:mb-4 ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className=" ">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full  dark:from-background "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full dark:from-background"></div>
    </div>
  );
}
