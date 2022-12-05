import styles from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <div className={styles.tableHeader}>
      <p>Title</p>
      <p>Score</p>
    </div>
  );
};

export default TableHeader;
