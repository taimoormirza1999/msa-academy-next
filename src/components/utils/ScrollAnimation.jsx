import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, variants, threshold = 0.2 }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  return (
    <section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </section>
  );
};

export default ScrollAnimation;
