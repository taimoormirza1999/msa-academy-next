import { motion } from "framer-motion";
import VideoSection from "./VideoSection"; // Assuming you have this component

const videos = [
  {
    videoUrl: "https://www.youtube.com/embed/3n-mizhCajY?si=QmcPzeUmEdDD5BaH",
    imageUrl: "https://i.ytimg.com/vi/3n-mizhCajY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCAkrpLTPqV8b4w4ny6WMK-Xffn4w",
  },
  {
    videoUrl: "https://www.youtube.com/embed/NW-RDESrCKU?si=jcf8IJ6KM0MfMBBy",
    imageUrl: "https://i.ytimg.com/vi/NW-RDESrCKU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC-gbxPv8AwhVdsqvuFOdw7kqvj9w",
  },
  {
    videoUrl: "https://www.youtube.com/embed/S4qg3_sBIo8?si=ReCbvZb4258TNhkc",
    imageUrl: "https://i.ytimg.com/vi/S4qg3_sBIo8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7b6PIW_cMWm94m3h1wzxrDUTvEw",
  },
  {
    videoUrl: "https://www.youtube.com/embed/apdV3r2ugrk?si=WnuV7Fmef8xtG9h9",
    imageUrl: "https://i.ytimg.com/vi/apdV3r2ugrk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAwrP5NNIApS7A38Z-lladEiAeo1g",
  },
];

const VideoGallery = () => {
  return (
     <div className="container md:mx-auto px-0 md:px-4 2xl:me-auto lg:flex lg:justify-end lg:pe-10">
    <div className="grid grid-cols-2 md:grid-cols-2 mt-10 gap-3 md:gap-5">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              delay: index * 0.2, // Staggered delay for smooth flow
            },
          }}
          viewport={{ once: true }} // Animate only once when in view
          className="h-52 md:h-48 flex justify-center items-center text-center rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <VideoSection videoUrl={video.videoUrl} imageUrl={video.imageUrl} />
        </motion.div>
      ))}
    </div>
     </div>
  );
};

export default VideoGallery;
