import { motion } from "framer-motion";
import Link from "next/link";
import ClippedImageGeneric from "../utils/ClippedImageGeneric";

export default function BlogCard({ blogItem }) {
  return (
    <div className="relative text-white m-1   lg:m-2 px-[10px] py-[15px] lg:py-[20px]  z-20 overflow-hidden ">
      <Link
        href={`/blog/post/${blogItem.friendlyUrl}`}
        className="cursor-pointer lg:relative w-full max-w-full  "
      >
        <ClippedImageGeneric
          imageUrl={blogItem?.coverImage}
          width={476.6}
          height={327.29}
        />

        <div className="lg:mb-3 pl-2 lg:pl-0 mb-2 w-[100%] max-w-full flex flex-col z-100 ">
          <h3 className="text-lg lg:text-2xl font-medium text-white font-medium-fgm mb-2 -mt-10 xl:mt-0 lg:mb-4 w-full font-primary">
            {blogItem.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
