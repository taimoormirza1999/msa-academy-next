import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import PlayButtonSVG from "@/assets/playbutton.svg";
import ClippedImage from "./utils/ClippedImage";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";
import useScreenStore from "@/store/useScreenStore";
import { IoIosCloseCircle } from "react-icons/io";
const VideoSection = ({ videoUrl, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [videoUrl, setVideoUrl] = useState(videoUrl);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  const isMobileMScreen = useScreenStore((state) => state.isMobileMScreen);
  const isMediumScreen = useScreenStore((state) => state.isMediumScreen);

  const handleVideoClick = () => {
    // setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setVideoUrl('');
  };

  return (
    <>
      <div
        className="relative h-52 md:h-52 flex justify-center items-center text-center rounded-2xl cursor-pointer"
        onClick={() => handleVideoClick()}
      >
       
       <div className="relative">
        <ClippedImageGeneric  heightAuto={true}  imageUrl={imageUrl} width={isMobileSScreen?310:isMobileMScreen?360:isMediumScreen?540:630} height={isMobileSScreen?300:isMobileMScreen?300:isMediumScreen?310:450} />
      </div>
        <div className="absolute rounded-full p-1.5 md:p-2.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            whileHover={{
              rotate: 180,
              transition: { duration: 1, ease: "easeInOut" },
            }}
          >
            <Image src={PlayButtonSVG.src} height={50} width={50} alt="" className="w-12 h-12"/>
          </motion.div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-40 inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="border-2 border-pink200 rounded relative">
            <button
              className="absolute top-3 text-3xl xl:text-4xl right-3 text-red-600 font-bold z-50"
              onClick={closeModal}
            >
              {/* X */}
              <IoIosCloseCircle />

            </button>
            <iframe
              className=" h-96 rounded bg-black w-80vw md:w-80vw 2xl:w-60vw md:h-40vw 2xl:h-30vw"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
