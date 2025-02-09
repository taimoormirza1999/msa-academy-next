import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = React.memo(() => {
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
          `${process.env.NEXT_PUBLIC_VITE_BACKEND_API}subscribe2`,
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
          <h2 className="text-xl lg:text-2xl font-bold text-white text-center font-medium-fgm uppercase mb-3">
            🎉Get exclusive <span className="text-pink200">updates</span> and
            offers🎉
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-white">
              Email Address <span className="text-sm text-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:ring-pink200 focus:shadow focus:shadow-pink200/30 font-medium-fgm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-pink200  text-white font-semibold rounded-lg shadow hover:bg-pink200 shadow-2xl shadow-pink200/20 focus:outline-none focus:ring-2 focus:ring-pink200 font-medium-fgm my-4 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
          <p className="text-sm text-center mt-4 mb-3 font-medium-kgpr">
            Join our community and be the first to know about new courses,
            exclusive offers, and more.
          </p>
        </div>
      </form>
    ),
    [email, loading, handleSubmit]
  );

  return showPopup ? (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="w-[90%] lg:w-full bg-[#111] rounded-lg max-w-md shadow-2xl shadow-pink200/30 lg:shadow-pink200/20">
        <Image
          height={500}
          width={1080}
          src="https://mcusercontent.com/e1f1a4e7afa29f4705570bedf/images/e212dfae-95cb-0a7c-afb0-47948cedbf32.png"
          alt="Newsletter"
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
    </div>
  ) : null;
});

export default SignupForm;
