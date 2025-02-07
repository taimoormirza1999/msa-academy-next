import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blogItem }) {
  const colors = ["bg-blue-500", "bg-pink-500", "bg-indigo-500"];
  const shadows = ["shadow-blue-500", "shadow-pink-500", "shadow-indigo-500"];

  return (
    <motion.div className="relative text-white m-1 md:mx-2 lg:m-2  border-2 border-pink200 rounded-[3rem] z-20 overflow-hidden ">
      {/* Image */}
      <Link
        href={`/blog/${blogItem._id}`}
        className="cursor-pointer lg:relative w-full max-w-full  "
      >
        <Image
          height={500}
          width={500}
          src={blogItem?.coverImage}
          alt="Blog Post"
          className="w-full object-cover h-[50vh] lg:h-[60vh]"
        />

        <div
          className=" absolute bottom-0 max-w-[100%] left-0 w-full h-[50vh] lg:p-4 bg-gradient-to-t from-black via-black/15 to-black/20 
       shadow-lg shadow-pink200/15 p-3 flex items-end z-100" style={{width: '100%', height: '100%'}}
        >
          <div className="lg:mb-8 pl-2 lg:pl-0 mb-2 w-[100%] max-w-full flex flex-col z-100 ">
            <h3 className="text-lg lg:text-xl font-bold text-white font-medium-fgm mb-2 lg:mb-4 w-full " >
              {blogItem.title}
            </h3>

            <div className="mb-3 flex flex-wrap gap-1.5">
              {blogItem.categories?.slice(0, 3).map((category, index) => (
                <span
                  key={index}
                  className={`w-auto text-white font-medium py-1 text-xs lg:text-sm px-4 rounded-full font-impact-regular bg-opacity-45 shadow-2xl ${
                    colors[index % colors.length]
                  } ${shadows[index % shadows.length]}`}
                >
                  {category}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${blogItem._id}`}
              className="w-[10rem] bg-gradient-to-tr from-pink200/40 via-black/60 to-purple/50 text-center text-gray-50 lg:mt-2 inline-block  border-[1.2px] shadow-lg shadow-pink200/35 border-pink200 px-4 p-1 rounded-full lg:text-sm text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
