import styles from '../styles/parallaxImage.module.scss'

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Image from 'next/image';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Img({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Image src={`/gg-${id}.png`} alt="gurrea guremory images" width={500} height={500}/>
      </div>
    </section>
  );
}

export default function ParallaxImage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4].map((image) => (
        <Img key={image} id={image} />
      ))}
    </>
  );
}
