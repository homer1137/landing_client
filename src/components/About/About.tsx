import styles from "./About.module.scss";
import { AboutCard } from "./AboutCard/AboutCard";

import img from "./special.png";

interface Props {}

export const About = ({}: Props) => {
  const cards = [
    { id: 1, title: "улучшиться эрекция", svg: "erection", result: "+35%" },
    { id: 2, title: "мышцы тазового дна", svg: "muscle", result: "+30%" },
    { id: 3, title: "растяжка и мышцы ног", svg: "stretch", result: "x2" },
    { id: 4, title: "повышение качества жизни-уверенность", svg: "confidence", result: "x10" },
  ];
  return (
    <section className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.picWrapper}>
          <img src={img} alt="course" className={styles.pic}/>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Курс как улучшить эрекцию</h2>
          <div className={styles.line}></div>
          <div className={styles.description}>
            С помощью курса можно быстро, а главное эффективно провести в своей
            группе интерактивный конкурс и игру. Такие конкурсы увеличивают
            активность аудитории. ВК обращает внимание на активность под постами
            и чаще показывает их в ленте, таким образом увеличивая виральный
            охват. Настройка игры занимает не более 10 минут, а вероятность
            WOW-эффекта гарантированна!
          </div>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {cards.map((item) => (
          <AboutCard title={item.title} icon={item.svg} result={item.result} key={item.id} />
        ))}
      </div>
    </section>
  );
};
