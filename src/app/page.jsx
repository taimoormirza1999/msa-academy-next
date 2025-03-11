"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../components/Loader";
import SignupForm from "../components/SignupForm";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import LoaderWrapper from "../components/utils/LoaderWrapper";
import MarqueeWrapper2 from "../components/MarqueeWrapper2";
import BlogCards from "../components/blog/BlogCards";
import MSALearningSection from "@/components/YouWillLearnv2";
import Loading from "@/components/Loading";
import FooterWrapper from "@/components/utils/FooterWrapper";
import Navigation from "@/components/Navigation";
import { OrganizationSchema, WebsiteSchema, EducationalOrgSchema, FAQSchema } from "@/components/SEO/SchemaMarkup";
import Head from "next/head";

const Banner = lazy(() => import("../components/Banner"));
const YourPath = lazy(() => import("../components/YourPath"));
const Animation = lazy(() => import("../components/Animation"));
const Drawing = lazy(() => import("../components/Drawing"));
const Mentors = lazy(() => import("../components/Mentors"));
const CommunityMap = lazy(() => import("../components/CommunityMap"));
const Checkout = lazy(() => import("../components/Checkout"));

// FAQ data for schema
const faqData = [
  {
    question: "What animation courses does MSA Academy offer?",
    answer: "MSA Academy offers comprehensive courses in character animation, 3D animation, Blender, After Effects, and character design. Our courses are designed for all skill levels from beginners to advanced."
  },
  {
    question: "Do I need prior experience to take MSA Academy courses?",
    answer: "No, our courses are designed for all skill levels. We have beginner-friendly courses that start with the fundamentals and gradually progress to more advanced techniques."
  },
  {
    question: "Are MSA Academy courses available online?",
    answer: "Yes, all our courses are available online, allowing you to learn at your own pace from anywhere in the world."
  },
  {
    question: "Do you offer certification upon course completion?",
    answer: "Yes, MSA Academy provides certification upon successful completion of our courses, which can be added to your portfolio and professional profiles."
  }
];

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduced from 3000ms to 1500ms for better performance
  }, []);

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
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <WebsiteSchema />
      <EducationalOrgSchema />
      <FAQSchema faqs={faqData} />
      
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navigation />
          <main>
            <section id="banner" aria-label="MSA Academy Banner">
              <Banner />
            </section>
            
            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="animation" aria-label="Animation Features">
                    <Animation />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>

            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="mentors" aria-label="Our Mentors">
                    <Mentors />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="your-path" aria-label="Your Learning Path">
                    <YourPath />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="learning" aria-label="What You Will Learn">
                    <MSALearningSection />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="drawing" aria-label="Drawing Techniques">
                    <Drawing />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="community" aria-label="Community Map">
                    <CommunityMap />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>

            <Suspense fallback={<Loader />}>
              <ScrollAnimation variants={fadeIn}>
                <LoaderWrapper>
                  <section id="checkout" aria-label="Checkout Options">
                    <Checkout showModal={showModal} setShowModal={setShowModal} />
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <ScrollAnimation>
                <LoaderWrapper>
                  <section aria-label="Featured Content" className="flex items-center justify-center pt-5 lg:-mb-10 lg:pt-24 overflow-x-hidden">
                    <div
                      className="container-fluid w-[99.5%] max-w-[1920px]  mx-auto  rounded-full shadow-2xl px-2 py-3 shadow-primary200 radius-[8px]  ultrawide:shadow-inner-left-right "
                      style={{ borderRadius: "8px" }}
                    >
                      <MarqueeWrapper2 />
                    </div>
                  </section>
                </LoaderWrapper>
              </ScrollAnimation>
            </Suspense>
            
            <section id="blog" aria-label="Latest Blog Posts">
              <BlogCards /> 
            </section>
          </main>
          
          {showForm && <SignupForm />}
          <FooterWrapper />
        </>
      )}
    </>
  );
};

export default Home;
