import styles from "./ServiceFor.module.scss";
import { ServiceForCard } from "./ServiceForCard/ServiceForCard";
interface Props {}

export const ServiceFor = ({}: Props) => {
  const cards = [
    { id: 1, title: "fast finish", svg: "fast" },
    { id: 2, title: "erection problem", svg: "erection" },
    { id: 3, title: "want better", svg: "best" },
    { id: 4, title: "have penis", svg: "penis" },
  ];
  return (
    <section className={styles.serviceFor}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Кому подойдет наш сервис</h2>
        <div className={styles.line}></div>
        <div className={styles.cardWrapper}>
          {cards.map((item) => (
            <ServiceForCard title={item.title} icon={item.svg} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
