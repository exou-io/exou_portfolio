"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/AuroraBackground"; // Import AuroraBackground
import styles from "@/components/SystemsOverview/SystemsOverview.module.css";

interface DivContent {
  heading: string;
  text: string;
  imageUrl: string;
}

const divContents: DivContent[] = [
  {
    heading: "Decision Support System with Integrated ML",
    text: "Discover how the tech of the future can help you today. Our advanced analytics and AI system takes care of your data collection, processing, cleaning, and storing. The goal of the system is to generate actionable insights suited to your business. Integrated machine learning deeply analyses your data and generates highly accurate forecasts and predictions. *LEARN MORE ABOUT USE-CASES HERE*",
    imageUrl: "/EXOU_full_logo_medium.png",
  },
  {
    heading: "Your Personal Growth & Business Analyst",
    text: "Ever wondered how it would be like to have questions and get them answered within seconds? --- We built this tool for large scale organisations but we don't like status-quo on knowledge & information so we are bringing it to everyone! *KNOW MORE HERE*",
    imageUrl: "/Zeeshan_Siddiqui-profile.jpeg",
  },
  {
    heading: "Workflow Automation",
    text: "A comprehensive automation tool capable of integrating across mobility, supply chain, delivery, media, and customer support systems. Built with the aim to streamline operations, enhance efficiency, and enable revenue generation through automation, optimizing resource allocation, and providing a wide variety of alerts and task hand-off scenarios. Integrating deeply across all business domains.",
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
    <span className="flex items-center justify-center z-10 min-w-full">
      <div className="">
        <div className="flex justify-between">
          <div className="lg:flex lg:w-3/5">
            <div className="pr-5 flex flex-col flex-1">
              {divContents.map((content, index) => (
                <motion.div
                  key={index}
                  // className={`${styles.divContent} ${index === currentDiv ? styles.active : ""}`}
                  //   className={`${styles.divContent} ${index === currentDiv ? styles.active : ""}`}
                  //   className={`absolute max-w-50 ${index === currentDiv ? "" : ""}`}
                  className="py-5 relative mb-2 overflow-hidden transition ease-out delay-150 cursor-pointer rounded-lg"
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
          <div className="flex justify-center items-center h-auto lg:w-2/5">
            <div className="hidden lg:flex lg:flex-1 lg:w-2/5">
              <AuroraBackground>
                <div className="ml-7 mt-7 mb-7 z-10 float-right">
                  <motion.img
                    key={currentDiv}
                    src={divContents[currentDiv].imageUrl}
                    alt={`Image for ${divContents[currentDiv].heading}`}
                    className="border-r-8 h-auto w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </AuroraBackground>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default SystemsOverview;
