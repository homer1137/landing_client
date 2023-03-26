import React from "react";
import { SwiperItemType } from "../../../../types";

import styles from "./SliderItem.module.scss";

interface Props {
  image: string,
  name: string,
  active: boolean
}

export const SliderItem = ({ image, name, active }: Props) => {
  return (
    <li className={active?[styles.sliderItem, styles.active].join(' '):styles.sliderItem}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.swiperImg}
          draggable="false"
        />
      </div>
    </li>
  );
};
