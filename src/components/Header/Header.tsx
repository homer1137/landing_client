import { useState } from "react";
import { HeaderLink } from "./HeaderLink/HeaderLink";
import styles from "./Header.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/slices/userSlice";
interface Section {
  name: string;
  status: boolean;
  scrollFn: (elementRef: any) => void;
  argument: React.MutableRefObject<HTMLDivElement | null>;
}

interface Props {
  scrollToSection: (elementRef: any) => void;
  sections: Section[];
}

export const Header = ({ scrollToSection, sections }: Props) => {
  const [active, setActive] = useState(sections);
  const isAuth = useAppSelector((state) => state.users.isAuth);
  const userEmail = useAppSelector((state) => state.users.user?.email);
  const dispatch = useAppDispatch()


  return (
    <>
      <ul className={styles.header}>
        {sections.map((item, index) => (
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
              item.scrollFn(item.argument);
            }}
          >
            <HeaderLink name={item.name} active={active[index].status} />
          </li>
        ))}
        <li key={"sadf"}>
          <Link to="/">Main</Link>
        </li>
        {!isAuth ? (
          <li key={"sadfc"}>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li key="br">
            <button onClick={()=>{dispatch(logout())}}>logout</button>
          </li>
        )}
        <li key={"saeadf"}>
          <Link to="/registration">Registration</Link>
        </li>
        <li key={"sad12f"}>
          <Link to="/registration">
            {isAuth
              ? `Пользователь ${userEmail}  авторизован`
              : "АВТОРИЗУЙТЕСЬ"}
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
