// import Image from "next/image";
// import { cn } from "../lib/utils";
import { Marquee } from "./utils/marquee";
import ClippedTestimonialCard from "./utils/ClippedTestimonialCard";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";
import useScreenStore from "@/store/useScreenStore";
import OutlineTextEffect from "./utils/OutlineTextEffect";

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

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  return (
    <ClippedTestimonialCard
      height={isLargeScreen ? 190 : 150}
      width={isLargeScreen ? 410 : 290}
      strokeWidth={1.16}
    >
      <div className="mx-2 ml-5 lg:mx-6 ">
        <div className="flex flex-row items-start gap-2 lg:gap-4 mt-7 pt-[2%] md:pt-[1%] lg:pt-[4%]">
          {/* Image */}
          <div className="self-start mt-0 lg:-mt-16 ">
            <ClippedImageGeneric
              imageUrl={img}
              width={isLargeScreen ? 145.26 : 65.26}
              height={isLargeScreen ? 145.26 : 65.26}
              value={15}
              rightTopClass="top-[7.5px] right-[7.5px]"
            />
          </div>
          <div className="flex flex-col">
            <figcaption className="lg:text-xl font-eastroman-trial-black">
              {name}
            </figcaption>
            <p className="lg:text-lg -mt-1 capitalize font-eastroman-trial-demibold text-grayPrimary">
              {username}
            </p>

            <blockquote className="text-xs text-white/90 lg:text-base font-eastroman-trial-bold mb-4">
              {body}
            </blockquote>
          </div>
        </div>
      </div>
    </ClippedTestimonialCard>
  );
};

export default function MarqueeWrapper2() {
  return (
    <>
      <div className="mb-5">
        <p className="text-center text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">
        One Story At A Time
        </p>

        <div className="mt-6">
          <OutlineTextEffect
            title={"MSA ART COMMUNITY"}
            classes={"w-full -mt-3"}
          />
        </div>

        <p className="text-center text-gray-300 text-lg md:text-xl mt-1 md:w-4/5 font-primary mx-auto">
          No matter where you are
        </p>
      </div>
      <div className="relative flex max-w-[1920px] w-full flex-col items-center justify-center rounded-lg">
        <Marquee pauseOnHover className=" lg:mb-4 ">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full  dark:from-background"></div>
      </div>
    </>
  );
}
