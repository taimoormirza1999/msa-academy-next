"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "./Loader";
import SignupForm from "./SignupForm";
import ScrollAnimation from "./utils/ScrollAnimation";
import LoaderWrapper from "./utils/LoaderWrapper";
import MarqueeWrapper2 from "./MarqueeWrapper2";
import BlogCards from "./blog/BlogCards";

const Banner = lazy(() => import("./Banner"));
const EnrollmentBanner = lazy(() => import("./EnrollmentBanner"));
const YourPath = lazy(() => import("./YourPath"));
const Animation = lazy(() => import("./Animation"));
const Drawing = lazy(() => import("./Drawing"));
const Mentors = lazy(() => import("./Mentors"));
const YouWillLearn = lazy(() => import("./YouWillLearn"));
const CommunityMap = lazy(() => import("./CommunityMap"));
const Checkout = lazy(() => import("./Checkout"));

const HomeClient = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= totalHeight * 0.4) {
        const cookies = document.cookie.split("; ");
        const emailCookie = cookies.find((row) => row.startsWith("email="));
        if (emailCookie) {
          const email = decodeURIComponent(emailCookie.split("=")[1]);
          setShowForm(false);
        } else {
          setShowForm(true);
        }

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <Suspense fallback={<Loader />}>
            <EnrollmentBanner />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <YourPath />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Animation />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Drawing />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Mentors />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <YouWillLearn />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <CommunityMap />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <EnrollmentBanner />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Checkout showModal={showModal} setShowModal={setShowModal} />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation>
              <LoaderWrapper>
                <main className="flex items-center justify-center pt-5 mb-32 lg:-mb-10 lg:pt-24 overflow-x-hidden">
                  <div
                    className="container-fluid w-[99.5%] max-w-[1920px] mx-auto rounded-full shadow-2xl px-2 py-3 shadow-primary200 radius-[8px] ultrawide:shadow-inner-left-right"
                    style={{ borderRadius: "8px" }}>
                    <MarqueeWrapper2 />
                  </div>
                </main>
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <BlogCards />
          {showForm && <SignupForm />}
        </>
      )}
    </>
  );
};

export default HomeClient;
