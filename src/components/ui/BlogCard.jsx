import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ClippedImageGeneric from "../utils/ClippedImageGeneric";

export default function BlogCard({ blogItem }) {
  const colors = ["bg-blue-500", "bg-pink-500", "bg-indigo-500"];
  const shadows = ["shadow-blue-500", "shadow-pink-500", "shadow-indigo-500"];

  return (
    <div className="relative text-white m-1  lg:m-2 px-[10px] py-[15px] lg:py-[20px]  z-20 overflow-hidden ">

      <a
        href={`/blog/post/${blogItem.friendlyUrl}`}
        className="cursor-pointer lg:relative w-full max-w-full  "
      >
        {/* <Image
          height={500}
          width={500}
          src={blogItem?.coverImage}
          alt="Blog Post"
          className="w-full object-cover h-[18rem] lg:h-[17rem] 2xl:h-[17rem] rounded-[2rem] lg:rounded-[2rem] border border-white/[29%]"
        /> */}

<ClippedImageGeneric imageUrl={blogItem?.coverImage} width={476.6} height={327.29}/>

          <div className="lg:mb-3 pl-2 lg:pl-0 mb-2 w-[100%] max-w-full flex flex-col z-100 ">
            <h3 className="text-lg lg:text-2xl font-medium text-white font-medium-fgm mb-2 -mt-2 lg:mb-4 w-full font-primary">
              {blogItem.title}
            </h3>
            {/* <div className=" flex flex-wrap gap-1.5">
              {blogItem.categories?.slice(0, 3).map((category, index) => (
                <span
                  key={index}
                  className={`w-auto text-white font-medium py-1 border border-white/50 text-xs lg:text-xs px-4 rounded-full font-impact-regular bg-opacity-45 shadow-2xl ${shadows[index % shadows.length]}`}
                >
                  {category}
                </span>
              ))}
            </div> */}
          </div>
        
      </a>
    </div>
  );
}
