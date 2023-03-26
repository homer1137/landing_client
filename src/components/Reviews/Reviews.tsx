import {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { SliderItem } from "../UI/Slider/SwiperItem/SliderItem";
import { SwiperItem } from "../UI/Swiper/SwiperItem/SwiperItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import styles from "./Reviews.module.scss";
interface Props {}

export const Reviews = ({}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 0,
      whois: "driver",
      name: "Ivanov Ivan",
      description:
        " Изначально мы делали сервис исключительно для закрытия SMM задач наших клиентов, но в процессе поняли, что результат, который мы получили, пригодится многим пользователям. ",
      rating: 5,
      image: "/reviews/arseniev.png",
    },
    {
      id: 1,
      whois: "engenier",
      name: "Ivanov Ivan2",
      description:
        "Добрый вечер, а что это значит? ",
      rating: 5,
      image: "/reviews/client5.jpg",
    },
    {
      id: 2,
      whois: "teacher",
      name: "Ivanov Ivan3",
      description:
        " Значит день бы по доброму начат ",
      rating: 5,
      image: "/reviews/nastya.png",
    },
    {
      id: 3,
      whois: "doctor",
      name: "Ivanov Ivan4",
      description:
        " Значит день бы по доброму прожит ",
      rating: 5,
      image: "/reviews/noskova.png",
    },
    {
      id: 4,
      whois: "student",
      name: "Ivanov Ivan5",
      description:
        " Он умножит счастливые дни ",
      rating: 5,
      image: "/reviews/roman.png",
    },
  ];
  return (
    <section className={styles.reviews}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Отзывы</h2>
        <div className={styles.line}></div>
        <div className={styles.description}>
          {items[activeIndex].description}
        </div>
        <div className={styles.cardWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                 {({ isActive }) => (
      <SliderItem image={item.image} name={item.name} active={isActive}/>
    )}
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
