import styles from "./DetailArticleCommentParent.module.css";

const DetailArticleCommentParent = (props) => {
  // return <p>{props.detailarticlecommentparent}</p>;
  return (
    <div
      className={styles.comment_parent}
      dangerouslySetInnerHTML={{ __html: props.detailarticlecommentparent }}
    />
  );
};

export default DetailArticleCommentParent;
