import { useRef, useState } from "react";
import { HeaderLink } from "./HeaderLink/HeaderLink";

import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/slices/userSlice";
import { LoginButton } from "../UI/Buttons/LoginButton/LoginButton";

import styles from "./Header.module.scss";
import { Hamburger } from "../Hamburger/Hamburger";
import { useMediaQuery } from "../../lib/hooks";
interface Section {
  name: string;
  status: boolean;
  scrollFn: (elementRef: any) => void;
  argument: React.MutableRefObject<HTMLDivElement | null>;
}

interface Props {
 
}

export const Header = ({}: Props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const isAuth = useAppSelector((state) => state.users.isAuth);
  const userEmail = useAppSelector((state) => state.users.user?.email);
  const dispatch = useAppDispatch();
  const location = useLocation();

  function toggleHambuger() {
    setHamburgerOpen((prev) => !prev);
  }

  const isMobile = useMediaQuery("(max-width: 767px)");
  const sections = useAppSelector((state)=>state.sections.sections)
  const [active, setActive] = useState(sections);

  return (
    <>
      <div>
        <ul className={styles.header}>
          {location.pathname === "/" &&
            sections.map((item, index) => (
              <li
                key={item.name}
                onClick={() => {
                  setActive(
                    sections.map((it, ind) => {
                      if (ind === index) {
                        return { ...it, status: true };
                      } else return { ...it, status: false };
                    })
                  );

                  item.scrollFn(item.argument as any);
                }}
              >
                <HeaderLink name={item.name} active={active[index].status} />
              </li>
            ))}
          {location.pathname !== "/" && (
            <li key={"sadf"}>
              <Link to="/">Main</Link>
            </li>
          )}
          {!isAuth ? (
            <li key={"sadfc"}>
              <Link to="/login">
                <LoginButton title="Login" />
              </Link>
            </li>
          ) : (
            <li
              key="br"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <LoginButton title="Logout" />
            </li>
          )}
          <li key={"sad12f"}>
            <Link to="/registration">
              {isAuth
                ? `Пользователь ${userEmail}  авторизован`
                : "АВТОРИЗУЙТЕСЬ"}
            </Link>
          </li>
        </ul>
        {isMobile && (
          <div onClick={toggleHambuger}>
            <Hamburger hamburgerOpen={hamburgerOpen} />
            {/* mobile header */}
            <ul
              className={styles.headerMobile}
              style={hamburgerOpen ? { display: "flex" } : { display: "none" }}
            >
              {location.pathname === "/" &&
                sections.map((item, index) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setActive(
                        sections.map((it, ind) => {
                          if (ind === index) {
                            return { ...it, status: true };
                          } else return { ...it, status: false };
                        })
                      );
                      item.scrollFn(item.argument as any);
                    }}
                  >
                    <HeaderLink
                      name={item.name}
                      active={active[index].status}
                    />
                  </li>
                ))}
              {location.pathname !== "/" && (
                <li key={"sadf"} className={styles.loginButton}>
                  <Link to="/">Main</Link>
                </li>
              )}
              {!isAuth ? (
                <li key={"sadfc"} className={styles.loginButton}>
                  <Link to="/login">
                    <LoginButton title="Login" />
                  </Link>
                </li>
              ) : (
                <li
                  className={styles.loginButton}
                  key="br"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <LoginButton title="Logout" />
                </li>
              )}
              <li key={"sad12f"}>
                <Link to="/registration">
                  {isAuth
                    ? `Пользователь ${userEmail}  авторизован`
                    : "АВТОРИЗУЙТЕСЬ"}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
};
