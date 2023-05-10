import styles from "./Success.module.scss";

interface Props {
  title: string;
  onClick?: ()=>void;
}

export const SuccessButton = ({ title }: Props) => {
  return <button className={styles.SuccessButton}>{title}</button>;
};
