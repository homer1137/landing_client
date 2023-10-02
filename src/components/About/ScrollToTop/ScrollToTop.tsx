import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import styles from "./ScrollToTop.module.scss";

interface Props {}

export const ScrollToTop = ({}: Props) => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    function scrollToTop() {
      if (window.scrollY > 500) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    }
    window.addEventListener("scroll", scrollToTop);
    return () => window.removeEventListener("scroll", scrollToTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTopButton && (
        <div className={styles.wrapper}>
          <FaAngleUp className={styles.scrollToTop} onClick={scrollTop} />
        </div>
      )}
    </>
  );
};
