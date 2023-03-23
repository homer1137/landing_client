import { IoIosMale } from "react-icons/io";
import { GiMuscleUp } from "react-icons/gi";
import { GiLeg } from "react-icons/gi";
import {ImCool} from 'react-icons/im'

import styles from "./AboutCard.module.scss";

interface Props {
  title: string;
  icon: string;
  result: string;
}

export const AboutCard = ({ title, icon, result }: Props) => {
  function getPic(pic: string) {
    switch (pic) {
      case "erection":
        return <IoIosMale className={styles.icon} />;
      case "muscle":
        return <GiMuscleUp className={styles.icon} />;
      case "stretch":
        return <GiLeg className={styles.icon} />;
      case 'confidence': return <ImCool className={styles.icon} />
      default:
        return <IoIosMale className={styles.icon} />;
    }
  }
  return (
    <div className={styles.aboutCard}>
      {getPic(icon)}
      <div className={styles.textWrapper}>
        <span className={styles.result}>{result}</span>
        <h4 className={styles.text}>{title}</h4>
      </div>
    </div>
  );
};
