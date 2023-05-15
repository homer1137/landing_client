import styles from "./Hamburger.module.scss";

interface Props {hamburgerOpen:boolean}

export const Hamburger = ({hamburgerOpen}: Props) => {
  return (
    <nav className={styles.Hamburger}>
      <div className={hamburgerOpen?styles.burger1:styles.burger1cross} />
      <div className={hamburgerOpen?styles.burger2:styles.burger2cross} />
      <div className={hamburgerOpen?styles.burger3:styles.burger3cross} />
    </nav>
  );
};
