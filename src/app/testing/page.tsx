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
    heading: "Heading 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/EXOU_full_logo_medium.png",
  },
  {
    heading: "Heading 2",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    imageUrl: "/Zeeshan_Siddiqui-profile.jpeg",
  },
  {
    heading: "Heading 3",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
    imageUrl: "/EXOU_full_logo_medium.png",
  },
  {
    heading: "Heading 4",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    imageUrl: "/Zeeshan_Siddiqui-profile.jpeg",
  },
];

const MyComponent: React.FC = () => {
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
    }, 5000);
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
    <div className={styles.container}>
      <div className={styles.column}>
        {divContents.map((content, index) => (
          <motion.div
            key={index}
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
                <h2>{content.heading}</h2>
                <p>{content.text}</p>
                <motion.div
                  key={key}
                  className={styles.progressBar}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, delay: 0.5 }} // Start progress bar after div expansion
                />
                <div className={styles.auroraBackground}>
                  <AuroraBackground>
                    <div className={styles.innerAurora}>
                      <h2>{content.heading}</h2>
                      <p>{content.text}</p>
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
      <div className={styles.column}>
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
  );
};

export default MyComponent;
