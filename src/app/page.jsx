"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../components/Loader";
import SignupForm from "../components/SignupForm";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import LoaderWrapper from "../components/utils/LoaderWrapper";
import MarqueeWrapper2 from "../components/MarqueeWrapper2";
import BlogCards from "../components/blog/BlogCards";
import { EnrollmentToast } from "@/components/EnrollmentToast";
const Banner = lazy(() => import("../components/Banner"));
const EnrollmentBanner = lazy(() => import("../components/EnrollmentBanner"));
const YourPath = lazy(() => import("../components/YourPath"));
const Animation = lazy(() => import("../components/Animation"));
const Drawing = lazy(() => import("../components/Drawing"));
const Mentors = lazy(() => import("../components/Mentors"));
const YouWillLearn = lazy(() => import("../components/YouWillLearn"));
const CommunityMap = lazy(() => import("../components/CommunityMap"));
const Checkout = lazy(() => import("../components/Checkout"));
const FAQ = lazy(() => import("../components/FAQ"));
const Home = () => {
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
  const [showToast, setShowToast] = useState(true)
  const names = ["Abhay", "John", "Emma", "Sophia", "Liam", "Olivia"];
  const [currentName, setCurrentName] = useState(names[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 60000);
    return () => clearInterval(interval);
  }, []);
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
                <main className="flex items-center justify-center pt-5 mb-32 lg:-mb-10 lg:pt-24 overflow-x-hidden ">
                  <div
                    className="container-fluid w-[99.5%] max-w-[1920px]  mx-auto  rounded-full shadow-2xl px-2 py-3 shadow-primary200 radius-[8px]  ultrawide:shadow-inner-left-right "
                    style={{ borderRadius: "8px" }}
                  >
                    <MarqueeWrapper2 />
                  </div>
                </main>
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <BlogCards />
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <FAQ />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
          <EnrollmentToast  name="Abhay"
          courseName="Chracter Animation Design Course"
          timestamp="About 17 hours ago"
          onDismiss={() => setShowToast(false)}
          duration={5000}/>
          </Suspense>
          {showForm && <SignupForm />}
        </>
      )}
    </>
  );
};

export default Home;
