import { useRef } from "react";
import CardOne from '../components/Cards/CardOne'
import CardTwo from '../components/Cards/CardTwo'
import CardThree from '../components/Cards/CardThree'
import { motion } from "framer-motion";


export default function Cards() {
  const constraintsRef = useRef(null);

  return (
    <aside
      ref={constraintsRef}
      className="relative flex gap-10 overflow-hidden bg-card-gradient w-full h-fit md:h-72 rounded-3xl px-2 md:px-8 py-8 md:py-12 cursor-pointer"
    >
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        className="flex gap-10 px-5  "
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        <motion.div className="flex-none">
          <CardOne />
        </motion.div>
        <motion.div className="flex-none">
          <CardTwo />
        </motion.div>
        <motion.div className="flex-none">
          <CardThree />
        </motion.div>
      </motion.div>
    </aside>
  );
};
