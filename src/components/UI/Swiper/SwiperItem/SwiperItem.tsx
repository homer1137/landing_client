import React from "react";
import { SwiperItemType } from "../../../../types";

import styles from "./SwiperItem.module.scss";

interface Props extends SwiperItemType {}

export const SwiperItem = ({ image, name }: Props) => {
  return (
    <li className={styles.swiperItem}>
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
