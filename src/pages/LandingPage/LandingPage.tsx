import {  useEffect, useRef } from "react";
import { About } from "../../components/About/About";
import { Header } from "../../components/Header/Header";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { WhyWe } from "../../components/Why/WhyWe";
import { VideoBackground } from "../../components/VideoBackground/VideoBackground";
import { ServiceFor } from "../../components/WhyWe/ServiceFor";
import { Reviews } from "../../components/Reviews/Reviews";
import { useAppSelector } from "../../store/hooks";

import styles from "./LandingPage.module.scss";
import { useDispatch } from "react-redux";
import { addSections } from "../../store/slices/sectionsSlice";

interface Props {}

export const LandingPage = ({}: Props) => {

  const dispatch = useDispatch()
  const serviceFor = useRef<null | HTMLDivElement>(null);
  const about = useRef<null | HTMLDivElement>(null);
  const whyWe = useRef<null | HTMLDivElement>(null);
  const reviews = useRef<null | HTMLDivElement>(null);
  
  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLDivElement>
  ) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const error = useAppSelector((state)=>state.users.error)
  const loading = useAppSelector((state)=>state.users.loading)
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
      name: "Reviews",
      status: false,
      scrollFn: scrollToSection,
      argument: reviews,
    },
  ];

  useEffect(()=>{if(sections){dispatch(addSections(sections))}},[])
  
  return (
    <div className={styles.landingPage}>
     
      <ScrollToTop />
      {/* {error&&<div>{error}</div>}
      {loading&&<div>{loading}</div>} */}
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
      <div ref={reviews}>
        <Reviews />
      </div>
      
     
    </div>
  );
};
