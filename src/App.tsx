import { Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { useAppDispatch } from "./store/hooks";
import { Header } from "./components/Header/Header";

import "./App.scss";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { checkAuth } from "./store/slices/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(localStorage.getItem('token')){dispatch(checkAuth());}
    
  }, [dispatch]);
  console.log('access token:', localStorage.getItem('token'))
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
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Header scrollToSection={scrollToSection} sections={sections} />
          }
        >
          {" "}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          {/* <Route path="*" element={<ErrorPage/>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
