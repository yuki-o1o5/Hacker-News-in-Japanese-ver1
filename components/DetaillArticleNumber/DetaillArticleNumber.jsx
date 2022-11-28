import styles from "./DetaillArticleNumber.module.css";

const DetailArticleNumber = (props) => {
  return (
    <p className={styles.detailarticlenumber}>{props.detailarticlenumber}</p>
  );
};

export default DetailArticleNumber;
