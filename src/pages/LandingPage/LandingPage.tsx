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


interface Props {serviceFor: any, about: any, whyWe: any, reviews: any}

export const LandingPage = ({serviceFor, about, whyWe, reviews}: Props) => {


  
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
