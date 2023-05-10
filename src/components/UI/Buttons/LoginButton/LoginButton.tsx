import styles from "./LoginButton.module.scss";

interface Props {
  title: string;
  onClick?: ()=>void;
}

export const LoginButton = ({ title }: Props) => {
  return <button className={styles.LoginButton}>{title}</button>;
};
