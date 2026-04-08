import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion, useReducedMotion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = React.memo(() => {
  const reduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => setEmail(e.target.value), []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email.trim() || !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        toast.error("Please enter a valid email.");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `/api/mailchimp`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            const expiryDate = new Date();
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            document.cookie = `email=${encodeURIComponent(
              email
            )}; expires=${expiryDate.toUTCString()}; path=/`;
          }, 0);
          toast.success("Successfully subscribed!");
        } else {
          toast.error(data.error || "Subscription failed.");
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
    [email]
  );

  const formContent = useMemo(
    () => (
      <form onSubmit={handleSubmit}>
        <div className="p-6 text-white">
          <h2 className="text-xl lg:text-2xl font-bold text-white text-center font-medium-fgm uppercase mb-3 font-primary">
            🎉Get exclusive <span className="text-pink200">updates</span> and
            offers🎉
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-white font-primary">
              Email Address <span className="text-sm text-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:ring-pink200 focus:outline-none  focus:shadow-2xl focus:shadow-pink200/40 font-medium-fgm font-primary"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-pink200  text-white font-semibold rounded-lg font-primary hover:bg-pink200 shadow-2xl shadow-pink200/20 focus:outline-none focus:ring-2 focus:ring-pink200 font-medium-fgm my-4 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
          <p className="text-xs lg:text-sm text-center mt-0 mb-3 font-primary">
            Join our community and be the first to know about new courses,
            exclusive offers, and more.
          </p>
        </div>
      </form>
    ),
    [email, loading, handleSubmit]
  );

  return showPopup ? (
    <motion.div className="shadow shadow-pink200/40 fixed inset-0 bg-black/90 bg-opacity-80 flex justify-center items-center z-50" initial={reduceMotion ? {} : { opacity: 0 }}
       animate={reduceMotion ? {} : { opacity: 1 }}
       transition={{ duration: reduceMotion ? 0 : 0.5 }}>
      <div className=" w-[90%] lg:w-full bg-[#111] rounded-lg max-w-md shadow-2xl shadow-pink200/60 lg:shadow-pink200/20">
        <Image
          height={500}
          width={1080}
          src="https://mcusercontent.com/e1f1a4e7afa29f4705570bedf/images/e212dfae-95cb-0a7c-afb0-47948cedbf32.png"
          alt="Newsletter"
          quality={50}
          // Popup is max-w-md (28rem ≈ 448px) on lg+, 90vw on mobile.
          // Without sizes, Next.js was serving the 1920w variant — ~4x too big.
          sizes="(min-width: 1024px) 28rem, 90vw"
          loading="lazy"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {!submitted ? (
          formContent
        ) : (
          <div className="text-center my-4">
            <h2 className="text-2xl font-bold text-white font-medium-fgm mt-2 mb-3">
              Thank You!
            </h2>
            <p className="text-sm text-gray-50 font-medium-kgpr">
              Thanks for subscribing🎉.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 py-2 px-4 bg-pink200 text-white font-semibold rounded-lg shadow hover:bg-pink200 focus:outline-none focus:ring-2 focus:ring-pink200 mb-4"
            >
              Close
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </motion.div>
  ) : null;
});

export default SignupForm;
