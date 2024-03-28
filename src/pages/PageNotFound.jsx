import React from "react";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.page}>
      <h1>
        404 error
        <br />
        <h1>Page not found 😢</h1>
      </h1>
    </div>
  );
}
