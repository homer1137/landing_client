

import styles from './WhyWe.module.scss'
import { WhyWeCard } from './WhyWeCard/WhyWeCard';
type Props = {}

export const WhyWe = ({}: Props) => {
  const cards = [
    { id: 1, title: "много инфы", description: 'мы пропустили через себя тонны информации, книжек, видео, исследований. и действительно выбрали самое лучшее и действенное', svg: "book" },
    { id: 2, title: "удобный видео контент", description: 'просто включаешь видео и делаешь упражнения вместе с нами', svg: "video" },
    { id: 3, title: "научное объеснение", description: 'в отдельном видео мы подбробно объясняем почему выбрали эти упражения. И что про них думаю врачи и какие есть исследования', svg: "science" },
    { id: 4, title: "теперь ты найдешь ответ", description: 'мы комплексно разобрали проблемы эрекции и варианты, что делать', svg: "answer" },
    { id: 5, title: "дополнительные бонусы", description: 'кроме упражнений мы выпустили отличное видео по добавкам. То что поможет тебе прокачать свою эффективность', svg: "bonus" },
    { id: 6, title: "отличные отзывы", description: 'скроль вниз чтобы увидеть часть из них', svg: "review" },
  ];
  return (
    <section className={styles.whyWe}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Почему именно мы</h2>
      <div className={styles.line}></div>
      <div className={styles.cardWrapper}>
        {cards.map((item) => (
          <WhyWeCard title={item.title} description={item.description} icon={item.svg} key={item.id} />
        ))}
      </div>
    </div>
  </section>
  )
}
