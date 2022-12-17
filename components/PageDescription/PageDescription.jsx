import styles from "./PageDescription.module.css";

const PageDescription = () => {
  return (
    <p className={styles.detail_text}>
      このサイトは直近1時間以内に投稿されたHacer Newsの記事の中から
      人気TOP3の記事をピックアップし日本語訳に変換し表示するサイトです。
    </p>
  );
};

export default PageDescription;

//
