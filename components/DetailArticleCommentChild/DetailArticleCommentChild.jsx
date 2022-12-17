import styles from "./DetailArticleCommentChild.module.css";

const DetailArticleCommentChild = (props) => {
  return (
    // <p className={styles.detailarticlecommentchild}>
    //   {props.detailarticlecommentchild}
    // </p>
    <div
      className={styles.detailarticlecommentchild}
      dangerouslySetInnerHTML={{ __html: props.detailarticlecommentchild }}
    />
  );
};

export default DetailArticleCommentChild;
