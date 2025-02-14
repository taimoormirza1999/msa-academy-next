"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdClose } from "react-icons/io";

export function EnrollmentToast({ name, courseName, timestamp, onDismiss, duration }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-4 lg:left-4 w-[80%] lg:w-[350px] bg-white/[22%] border-[0.7px] border-white/[42%] z-20  backdrop-blur-sm rounded-[1.5rem] shadow-lg overflow-hidden"
        >
          <div className="p-2 lg:p-3 pr-2 lg:pr-5">
            <button
              onClick={() => {
                setIsVisible(false)
                onDismiss?.()
              }}
              className="absolute right-2 top-2 p-0 rounded-full transition-colors"
            >
              <IoMdClose className="size-4 text-gray-300" />
            </button>

            <div className="flex gap-2 lg:gap-3 items-center">
              <div className="lg:size-12 size-10 rounded-full bg-pink200 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-white">{name[0]}</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white">
                  <span className="font-medium">{name}</span> enrolled in the course
                </p>
                <p className="text-white font-medium mt-0.5">'{courseName}'</p>
                <p className="text-gray-300 text-sm mt-1 font-sans font-semibold">{timestamp}</p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className="h-1.5 bg-white origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

