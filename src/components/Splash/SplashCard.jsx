import { motion } from "framer-motion";
import { cardVariants } from "./splashVariants";

const SplashCard = ({ children }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="w-60 h-36 rounded-2xl
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-2xl
                 flex items-center justify-center
                 text-white text-2xl font-bold"
    >
      {children}
    </motion.div>
  );
};

export default SplashCard;
