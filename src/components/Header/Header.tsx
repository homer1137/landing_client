import { useState } from "react";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import styles from "./Header.module.scss";

interface Section {
  name: string,
    status: boolean,
    scrollFn: (elementRef: any)=>void,
    argument: React.MutableRefObject<HTMLDivElement | null>
}

interface Props {
  scrollToSection: (elementRef: any)=>void;
  sections: Section[]
};

export const Header = ({scrollToSection, sections}: Props) => {
  const [active, setActive] = useState(sections);
 

  return (
    <>
      <ul className={styles.header}>
        {sections.map((item, index) => (
          <li
            onClick={() => {
              setActive(sections.map((it, ind)=>{
                if(ind===index){
                  return {...it, status: true}
                }else return {...it, status: false}
              }));
              item.scrollFn(item.argument)
            }}
          >
            <HeaderLink name={item.name} active={active[index].status} />
          </li>
        ))}
      </ul>
    </>
  );
};
