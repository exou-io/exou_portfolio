"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/AuroraBackground"; // Import AuroraBackground
import styles from "@/TestComponent.module.css";

interface DivContent {
  heading: string;
  text: string;
  imageUrl: string;
}

const divContents: DivContent[] = [
  {
    heading: "Decision Support System with Integrated ML",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/EXOU_full_logo_medium.png",
  },
  {
    heading: "Your Personal Growth & Business Analyst",
    text: "Ever wondered how it would be like to have questions and get them answered within seconds? --- We built this tool for large scale organisations but we don't like status-quo on knowledge & information so we are bringing it to everyone! *KNOW MORE HERE*",
    imageUrl: "/Zeeshan_Siddiqui-profile.jpeg",
  },
  {
    heading: "Workflow Automation",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
    imageUrl: "/EXOU_full_logo_medium.png",
  },
  {
    heading: "Complex Workflows? Perfect tool for Product, Dev, & Operations",
    text: "If you are someone who appreciates a well-tailored perfect-fit-to-inch Suit then imagine such a suit for your organisational workflows. That's right, we built a tool for a problem that we faced ourselves and could not find a single tool in the market that would match our standards and requirements. *FIND OUT HOW OUR CUSTOMERS ARE USING IT*",
    imageUrl: "/Zeeshan_Siddiqui-profile.jpeg",
  },
  {
    heading: "Automated Customer Support and Lead Management",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    imageUrl: "/EXOU_full_logo_medium.png",
  },
];

const SystemsOverview: React.FC = () => {
  const [currentDiv, setCurrentDiv] = useState(0);
  const [key, setKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentDiv((prev) => {
        const nextDiv = (prev + 1) % divContents.length;
        setKey((prevKey) => prevKey + 1);
        return nextDiv;
      });
    }, 8000);
  }, []);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  const handleClick = (index: number) => {
    if (index !== currentDiv) {
      setCurrentDiv(index);
      setKey((prevKey) => prevKey + 1);
      resetInterval();
    }
  };

  return (
    <span className="pt-24 flex items-center justify-center z-10">
      <div className="max-w-[80vw]">
        <div className="flex justify-between items-start">
          <div className="lg:flex w-3/5">
            <div className="py-10 pr-5 flex flex-col flex-1 w-[100vw]">
              {divContents.map((content, index) => (
                <motion.div
                  key={index}
                  // className={`${styles.divContent} ${index === currentDiv ? styles.active : ""}`}
                  className={`${styles.divContent} ${index === currentDiv ? styles.active : ""}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: index === currentDiv ? 1 : 0.5,
                    height: index === currentDiv ? "auto" : 50,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleClick(index)}
                  onAnimationComplete={() => {
                    if (index === currentDiv) setIsAnimating(false);
                  }}
                >
                  {index === currentDiv ? (
                    <div className={styles.activeContent}>
                      {/* <h2>{content.heading}</h2>
                <p>{content.text}</p> */}
                      <motion.div
                        key={key}
                        className={styles.progressBar}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 8, delay: 0.5 }} // Start progress bar after div expansion; and match duration with interval
                      />
                      <div className={styles.auroraBackground}>
                        <AuroraBackground>
                          <div className={styles.innerAurora}>
                            <h2 className="pt-2 pb-3">{content.heading}</h2>
                            <p className="pb-3">{content.text}</p>
                          </div>
                        </AuroraBackground>
                      </div>
                    </div>
                  ) : (
                    <h2>{content.heading}</h2>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="py-10 pl-5 hidden lg:flex lg:flex-1 lg:w-2/5">
            <motion.img
              key={currentDiv}
              src={divContents[currentDiv].imageUrl}
              alt={`Image for ${divContents[currentDiv].heading}`}
              className={styles.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </span>
  );
};

function ComingSoon() {
  return <div>Comning Soon</div>;
}

export default ComingSoon;

// export default SystemsOverview;
