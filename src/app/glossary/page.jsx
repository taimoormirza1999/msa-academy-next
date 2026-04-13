import SEOPageWrapper from "@/components/SEOPageWrapper";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Animation Glossary | Animation Terms Explained | MSA Club",
  description:
    "A complete glossary of animation, character design, and 3D terms. Beginner-friendly definitions for keyframe, rigging, IK, FK, principles of animation, and more.",
  keywords: [
    "animation glossary",
    "animation terms",
    "3D animation terms",
    "character animation glossary",
    "Blender glossary",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/glossary" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Animation Glossary | MSA Club",
    description:
      "Beginner-friendly definitions for the most common animation, 3D, and character design terms.",
    url: "https://msa-club.com/glossary",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Glossary | MSA Club",
    description:
      "A beginner-friendly glossary of animation and 3D terms.",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const terms = [
  { term: "12 Principles of Animation", def: "The foundational rules of animation defined by Disney animators Frank Thomas and Ollie Johnston, including squash and stretch, anticipation, staging, follow through, and more." },
  { term: "Anticipation", def: "A small movement opposite the main action that prepares the viewer for what's about to happen — like crouching before a jump." },
  { term: "Armature", def: "In 3D software, the skeleton structure used to deform a character mesh during animation." },
  { term: "Blender", def: "A free and open-source 3D creation suite used for modeling, rigging, animation, simulation, rendering, and more. The main tool used in MSA Club's 3D courses." },
  { term: "Character Design", def: "The art of creating a visual identity for an animated character — including silhouette, anatomy, clothing, color, and personality." },
  { term: "Cycle", def: "An animation that loops seamlessly, like a walk cycle or a run cycle." },
  { term: "Duik", def: "A free rigging plugin for Adobe After Effects that lets artists rig and animate 2D characters." },
  { term: "EEVEE", def: "Blender's real-time rendering engine — fast and great for animation previews or stylized final renders." },
  { term: "Easing", def: "Adjusting the speed of an animation so it slows in and out of poses naturally instead of moving at a constant rate." },
  { term: "FK (Forward Kinematics)", def: "A rigging method where each joint rotates from its parent. Good for arcing motion like an arm swing." },
  { term: "Frame Rate (FPS)", def: "How many frames per second an animation plays at. Common rates: 24 fps (film), 30 fps (TV), 60 fps (games)." },
  { term: "Gesture Drawing", def: "Quick, loose drawings used to capture the energy and motion of a pose — usually done in 30 seconds to 2 minutes." },
  { term: "IK (Inverse Kinematics)", def: "A rigging method where you move an end effector (like a hand) and the chain of joints follows. Great for foot placement and grabbing objects." },
  { term: "Keyframe", def: "A frame that defines a specific pose or position. The software fills in the in-between frames automatically." },
  { term: "Lip Sync", def: "Animating a character's mouth to match recorded dialogue." },
  { term: "Mesh", def: "A 3D object made of vertices, edges, and faces — the basic building block of any 3D model." },
  { term: "Motion Graphics", def: "Animated graphic design — typically text, shapes, and logos used in titles, ads, and explainer videos." },
  { term: "NURBS", def: "Non-Uniform Rational B-Splines — a smooth curve-based modeling method, less common in modern character work." },
  { term: "Onion Skinning", def: "A 2D animation feature that shows ghost outlines of previous and next frames so you can see motion progression." },
  { term: "Overlap", def: "When parts of a character continue moving after the main action stops — like hair settling after a head turn." },
  { term: "Parent / Child", def: "A hierarchical relationship where moving the parent automatically moves the child. Used everywhere in rigging." },
  { term: "Pose-to-Pose", def: "An animation method where you draw the key poses first, then fill in the in-betweens." },
  { term: "Principles of Animation", def: "See 12 Principles of Animation." },
  { term: "Rigging", def: "Building the digital skeleton and controls that let an animator pose and move a character." },
  { term: "Rotoscoping", def: "Tracing live-action footage frame by frame to create realistic animation." },
  { term: "Showreel / Demo Reel", def: "A short video compilation of your best animation work, used for job applications." },
  { term: "Squash and Stretch", def: "Deforming a shape to give it a sense of weight and flexibility — one of the most important animation principles." },
  { term: "Storyboard", def: "A sequence of drawings that plans out the shots in a scene before animation begins." },
  { term: "Subdivision", def: "A modeling technique that smooths a 3D mesh by adding extra geometry." },
  { term: "Texture Map", def: "A 2D image wrapped onto a 3D model to give it surface detail like color, roughness, or bumps." },
  { term: "Timeline", def: "The horizontal strip in animation software where you place keyframes and arrange your animation in time." },
  { term: "Tween / In-between", def: "The frames generated between two keyframes to create smooth motion." },
  { term: "Walk Cycle", def: "A short looping animation of a character walking, used as a fundamental exercise for new animators." },
  { term: "Weight Painting", def: "Defining how much each bone in a rig influences each part of the mesh — critical for natural deformation." },
];

export default function GlossaryPage() {
  // Group by first letter for easy nav
  const grouped = terms.reduce((acc, t) => {
    const letter = t.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(t);
    return acc;
  }, {});
  const letters = Object.keys(grouped).sort();

  return (
    <SEOPageWrapper>
      <main className="min-h-screen text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 pt-28">
          <header className="mb-10">
            <p className="text-sm uppercase tracking-wider text-pink-400 mb-2">
              Reference
            </p>
            <h1 className="font-primary text-3xl lg:text-5xl font-bold mb-4">
              Animation{" "}
              <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
                Glossary
              </span>
            </h1>
            <p className="font-eastroman-trial-demibold text-gray-400 text-lg max-w-2xl">
              Plain-English definitions of {terms.length}+ common animation,
              character design, and 3D terms. Bookmark this page — it's your cheat
              sheet for every MSA Club course.
            </p>
          </header>

          <nav aria-label="Glossary letters" className="mb-10 flex flex-wrap gap-2">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="text-sm bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 border border-purple-500/30 px-3 py-1.5 rounded-full transition"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="space-y-10">
            {letters.map((letter) => (
              <section key={letter} id={`letter-${letter}`}>
                <h2 className="font-primary text-3xl text-purple-300 mb-4 border-b border-white/10 pb-2">
                  {letter}
                </h2>
                <dl className="space-y-4">
                  {grouped[letter].map((t) => (
                    <div
                      key={t.term}
                      className="bg-white/5 border border-white/10 rounded-xl p-5"
                    >
                      <dt className="font-primary text-white font-semibold mb-1">
                        {t.term}
                      </dt>
                      <dd className="font-eastroman-trial-demibold text-gray-400 leading-relaxed text-sm">
                        {t.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </main>
    </SEOPageWrapper>
  );
}
