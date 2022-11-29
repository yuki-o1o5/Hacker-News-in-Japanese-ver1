import styles from "./DetailArticleTitle.module.css";

const DetailArticleTitle = (props) => {
  return (
    <p className={styles.detailarticletitle}>{props.detailarticletitle}</p>
  );
};

export default DetailArticleTitle;
