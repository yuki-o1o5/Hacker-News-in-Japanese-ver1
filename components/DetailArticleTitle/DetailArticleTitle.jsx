import styles from "./DetailArticleTitle.module.css";

const DetailArticleTitle = (props) => {
  return (
    <h2 className={styles.detailarticletitle}>{props.detailarticletitle}</h2>
  );
};

export default DetailArticleTitle;
