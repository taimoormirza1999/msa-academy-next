"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import LoaderWrapper from "@/components/utils/LoaderWrapper";
import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import { Banner } from "@/components/Banner";

const SignupForm = lazy(() => import("../components/SignupForm"));
const BlogCards = lazy(() => import("../components/blog/BlogCards"));
const MSALearningSection = lazy(() => import("@/components/YouWillLearnv2"));
const FooterWrapper = lazy(() => import("@/components/utils/FooterWrapper"));

const MarqueeWrapper2 = lazy(() => import("../components/MarqueeWrapper2"));
const YourPath = lazy(() => import("../components/YourPath"));
const Animation = lazy(() => import("../components/Animation"));
const Drawing = lazy(() => import("../components/Drawing"));
const Mentors = lazy(() => import("../components/Mentors"));
const CommunityMap = lazy(() => import("../components/CommunityMap"));
const Checkout = lazy(() => import("../components/Checkout"));

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
 useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= totalHeight * 0.7) {
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (loading) {
    return <Loading />;
  }
  const LoadingFallback = () => (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-white border-opacity-90 rounded-full border-t-[#ff00ff]/90 animate-spin"></div>
    </div>
  );

  return (
    <>
        
          <Navigation />
          <Banner />
      <Suspense fallback={<LoadingFallback />}>
          <LoaderWrapper>
            <Animation />
          </LoaderWrapper>
      </Suspense>

          <Suspense fallback={<LoadingFallback />}>
              <LoaderWrapper>
                <Mentors />
              </LoaderWrapper>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
              <LoaderWrapper>
                <YourPath />
              </LoaderWrapper>
          
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
           
              <LoaderWrapper>
                <MSALearningSection />
              </LoaderWrapper>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
              <LoaderWrapper>
                <Drawing />
              </LoaderWrapper>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
              <LoaderWrapper>
                <CommunityMap />
              </LoaderWrapper>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
              <LoaderWrapper>
                <Checkout showModal={showModal} setShowModal={setShowModal} />
              </LoaderWrapper>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
              <LoaderWrapper>
                <main className="flex items-center justify-center pt-5 lg:-mb-10 lg:pt-24 overflow-x-hidden ">
                  <div
                    className="container-fluid w-[99.5%] max-w-[1920px]  mx-auto  rounded-full shadow-2xl px-2 py-3 shadow-primary200 radius-[8px]  ultrawide:shadow-inner-left-right "
                    style={{ borderRadius: "8px" }}
                  >
                    <MarqueeWrapper2 />
                  </div>
                </main>
              </LoaderWrapper>
          </Suspense>
       <Suspense fallback={<LoadingFallback />}>
          <BlogCards /> 
       </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            {showForm && <SignupForm />}
          </Suspense>
          <FooterWrapper />
        </>
      )}

export default Home;
