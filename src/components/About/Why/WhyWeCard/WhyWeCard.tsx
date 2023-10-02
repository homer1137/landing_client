import { FaBookOpen } from "react-icons/fa";
import { BsPlayBtn } from "react-icons/bs";
import { BiMessageCheck } from "react-icons/bi";
import {MdOutlineScience} from 'react-icons/md'
import {BsPatchPlus} from 'react-icons/bs'
import {MdPreview} from 'react-icons/md';

import styles from "./WhyWeCard.module.scss";

interface Props {
  title: string;
  icon: string;
  description: string;
}

export const WhyWeCard = ({ title, icon, description }: Props) => {
  function getPic(pic: string) {
    switch (pic) {
      case "book": return <FaBookOpen className={styles.icon} />;
      case "video":return <BsPlayBtn className={styles.icon} />
      case 'science':return <MdOutlineScience className={styles.icon} />
      case 'answer': return <BiMessageCheck className={styles.icon} />
      case 'bonus':return <BsPatchPlus className={styles.icon} />
      case 'review': return <MdPreview className={styles.icon} />
      default:
        return <FaBookOpen className={styles.icon} />;
    }
  }
  return (
    <div className={styles.whyWeCard}>
      <div className={styles.titleWrapper}>
        {getPic(icon)}
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
