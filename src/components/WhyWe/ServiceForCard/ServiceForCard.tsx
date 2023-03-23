import styles from "./ServiceForCard.module.scss";
import { TbRocket } from "react-icons/tb";
import { GiPisaTower, GiPodiumWinner } from "react-icons/gi";
import { IoIosMale} from "react-icons/io";
interface Props {
  title: string;
  icon: string;
}

export const ServiceForCard = ({ title, icon }: Props) => {

    function getPic(pic:string){
        switch (pic) {
            case 'fast': return <TbRocket className={styles.icon} />
            case 'erection':return <GiPisaTower className={styles.icon} />
            case 'best':return <GiPodiumWinner className={styles.icon} />
            case 'penis': return <IoIosMale className={styles.icon} />
            default:
                return <TbRocket className={styles.icon} />
        }
    }

  return (
    <div className={styles.serviceForCard}>
        {getPic(icon)}
      <h4 className={styles.persons}>{title}</h4>
    </div>
  );
};
