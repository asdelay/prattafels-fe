import MensenImage from "@/assets/mensen.svg";
import Typer from "@/components/Typer";
import { motion } from "motion/react";
const HomeSection = () => {
  return (
    <section>
      <div>
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(80px)" }}
          animate={{
            opacity: [1],
            transform: "translateY(0)",
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="relative text-[48px] text-center tracking-widest"
        >
          PRATTAFELS
        </motion.h1>
      </div>
      <div className="mt-16 relative min-h-[200px]">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(80px)" }}
          animate={{
            opacity: [1],
            transform: "translateY(0)",
            transition: { duration: 1, ease: "easeInOut", delay: 0.7 },
          }}
          className="absolute top-2 left-0 p-6 w-[200px] border-1 rounded-xl"
        >
          <Typer
            text="WHERE WORDS MEET PEOPLE"
            delay={100}
            beforeRender={1000}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(80px)" }}
          animate={{
            opacity: [1],
            transform: "translateY(0)",
            transition: { duration: 1, ease: "easeInOut", delay: 1.2 },
          }}
          className="absolute top-20 right-0 w-[160px] text-right p-6 border-1 rounded-xl"
        >
          <Typer text="AND PEOPLE MEET DUTCH" delay={100} beforeRender={1400} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        animate={{
          opacity: [1],
          transform: "translateY(0)",
          transition: { duration: 1, ease: "easeOut", delay: 0.5 },
        }}
        className="flex justify-center align-center"
      >
        <img className="size-[250px]" src={MensenImage} alt="mensen image" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        className="relative font-semibold text-[20px] uppercase my-24"
      >
        a real opportunity <br /> to practice dutch with natives <br /> for free
      </motion.h3>
    </section>
  );
};

export default HomeSection;
