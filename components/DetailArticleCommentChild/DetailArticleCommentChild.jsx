import styles from "./DetailArticleCommentChild.module.css";

const DetailArticleCommentChild = (props) => {
  return (
    <p className={styles.detailarticlecommentchild}>
      {props.detailarticlecommentchild}
    </p>
  );
};

export default DetailArticleCommentChild;
