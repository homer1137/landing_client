import {  useRef } from "react";
import { About } from "../../components/About/About";
import { Header } from "../../components/Header/Header";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { WhyWe } from "../../components/Why/WhyWe";
import { VideoBackground } from "../../components/VideoBackground/VideoBackground";
import { ServiceFor } from "../../components/WhyWe/ServiceFor";
import styles from "./LandingPage.module.scss";

interface Props {}

export const LandingPage = ({}: Props) => {
  const serviceFor = useRef<null | HTMLDivElement>(null);
  const about = useRef<null | HTMLDivElement>(null);
  const whyWe = useRef<null | HTMLDivElement>(null);

  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLDivElement>
  ) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const sections = [
    {
      name: "Service for",
      status: false,
      scrollFn: scrollToSection,
      argument: serviceFor,
    },
    {
      name: "About",
      status: false,
      scrollFn: scrollToSection,
      argument: about,
    },
    {
      name: "Why we",
      status: false,
      scrollFn: scrollToSection,
      argument: whyWe,
    },
    {
      name: "Last",
      status: false,
      scrollFn: scrollToSection,
      argument: serviceFor,
    },
  ];

  return (
    <div className={styles.landingPage}>
      <Header scrollToSection={scrollToSection} sections={sections} />
      <ScrollToTop />
      <div>
        <VideoBackground />
      </div>
      <div ref={whyWe}>
        <ServiceFor />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={serviceFor}>
        <WhyWe />
      </div>
      
     
    </div>
  );
};
