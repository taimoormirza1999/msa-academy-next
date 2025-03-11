import { Suspense } from 'react';
import Image from 'next/image';
import Loader from '@/components/Loader';
import { OrganizationSchema, BreadcrumbSchema } from '@/components/SEO/SchemaMarkup';

// Generate metadata for the about page
export const metadata = {
  title: 'About MSA Academy | Animation & Character Design School',
  description: 'MSA Academy is a premier animation and character design school dedicated to nurturing creative talent. Learn about our mission, vision, and expert instructors.',
  keywords: 'MSA Academy, animation school, character design school, animation courses, 3D animation training, Dubai animation school, animation instructors',
  openGraph: {
    title: 'About MSA Academy | Animation & Character Design School',
    description: 'MSA Academy is a premier animation and character design school dedicated to nurturing creative talent. Learn about our mission, vision, and expert instructors.',
    url: 'https://msa-club.com/about',
    type: 'website',
    images: [{
      url: 'https://msa-club.com/hero_banner.png',
      width: 1200,
      height: 630,
      alt: 'MSA Academy Team',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MSA Academy | Animation & Character Design School',
    description: 'MSA Academy is a premier animation and character design school dedicated to nurturing creative talent.',
    images: ['https://msa-club.com/hero_banner.png'],
  },
  alternates: {
    canonical: 'https://msa-club.com/about',
  },
};

export default function AboutPage() {
  // Breadcrumb items for the about page
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About MSA Academy',
            'description': 'MSA Academy is a premier animation and character design school dedicated to nurturing creative talent.',
            'url': 'https://msa-club.com/about',
            'isPartOf': {
              '@type': 'WebSite',
              'name': 'MSA Academy',
              'url': 'https://msa-club.com'
            }
          })
        }}
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen mx-0 bg-cover bg-center mt-28">
          <div className="container w-[92%] xl:w-[80%] mx-auto lg:p-6 my-18 max-w-[1920px] pt-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    {index === breadcrumbItems.length - 1 ? (
                      <span className="text-white">{item.name}</span>
                    ) : (
                      <a href={item.url} className="hover:text-pink-400 transition-colors">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-impact-regular">
                About MSA Academy
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Empowering the next generation of animators and character designers
              </p>
            </div>
            
            {/* Mission and Vision */}
            <section className="mb-20" aria-labelledby="mission-vision">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 id="mission-vision" className="text-3xl font-bold text-white mb-6">
                    Our Mission & Vision
                  </h2>
                  <p className="text-gray-300 mb-4">
                    At MSA Academy, we are dedicated to nurturing creative talent and providing world-class education in animation and character design. Our mission is to empower students with the skills, knowledge, and industry connections they need to succeed in the competitive world of animation.
                  </p>
                  <p className="text-gray-300 mb-4">
                    We envision a future where our graduates lead the animation industry, creating compelling stories and characters that captivate audiences worldwide. Through our comprehensive curriculum and hands-on approach, we're building the next generation of animation professionals.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Industry-relevant curriculum designed by professionals</li>
                    <li>Hands-on learning with cutting-edge software and techniques</li>
                    <li>Small class sizes for personalized attention</li>
                    <li>Regular portfolio reviews and career guidance</li>
                  </ul>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20">
                  <Image
                    src="/about-mission.jpg"
                    alt="MSA Academy Mission and Vision"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </section>
            
            {/* Our Team */}
            <section className="mb-20" aria-labelledby="our-team">
              <h2 id="our-team" className="text-3xl font-bold text-white mb-10 text-center">
                Meet Our Expert Instructors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-white/15">
                  <div className="relative h-[300px]">
                    <Image
                      src="/team-member1.jpg"
                      alt="John Doe - Animation Director"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">John Doe</h3>
                    <p className="text-pink-400 mb-3">Animation Director</p>
                    <p className="text-gray-300 text-sm">
                      With over 15 years of experience at major studios including Pixar and DreamWorks, John brings unparalleled expertise to our character animation courses.
                    </p>
                  </div>
                </div>
                
                {/* Team Member 2 */}
                <div className="bg-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-white/15">
                  <div className="relative h-[300px]">
                    <Image
                      src="/team-member2.jpg"
                      alt="Jane Smith - Character Design Lead"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Jane Smith</h3>
                    <p className="text-pink-400 mb-3">Character Design Lead</p>
                    <p className="text-gray-300 text-sm">
                      Jane's character designs have been featured in award-winning animated films and games. She specializes in creating memorable, expressive characters that tell stories.
                    </p>
                  </div>
                </div>
                
                {/* Team Member 3 */}
                <div className="bg-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-white/15">
                  <div className="relative h-[300px]">
                    <Image
                      src="/team-member3.jpg"
                      alt="Michael Johnson - 3D Animation Specialist"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Michael Johnson</h3>
                    <p className="text-pink-400 mb-3">3D Animation Specialist</p>
                    <p className="text-gray-300 text-sm">
                      Michael has worked on blockbuster films and AAA games, mastering the art of 3D animation and rigging. His technical expertise helps students create fluid, lifelike animations.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Testimonials */}
            <section className="mb-20" aria-labelledby="testimonials">
              <h2 id="testimonials" className="text-3xl font-bold text-white mb-10 text-center">
                What Our Students Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/student1.jpg"
                        alt="Student Testimonial"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Sarah Williams</h3>
                      <p className="text-gray-400 text-sm">Character Animation Graduate</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "MSA Academy transformed my passion for animation into a professional career. The instructors' industry experience and personalized feedback helped me develop a portfolio that landed me my dream job at a major studio."
                  </p>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/student2.jpg"
                        alt="Student Testimonial"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">David Chen</h3>
                      <p className="text-gray-400 text-sm">3D Modeling Student</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "The hands-on approach at MSA Academy gave me the confidence to tackle complex animation projects. The community of fellow students and alumni has been an invaluable resource for collaboration and job opportunities."
                  </p>
                </div>
              </div>
            </section>
            
            {/* Contact CTA */}
            <section className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-10 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Animation Journey?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join MSA Academy today and take the first step toward a rewarding career in animation and character design. Our expert instructors and comprehensive curriculum will help you unlock your creative potential.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Contact MSA Academy"
              >
                Contact Us Today
              </a>
            </section>
          </div>
        </div>
      </Suspense>
    </>
  );
}
