import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Museum.module.css";

export default function Museum() {
  const { type, numbering } = useParams();

  return (
    <div className={styles.frame}>
      <div className={styles.card}>
        Asset type {type ?? "invalid"} n° {numbering ?? "invalid"}
      </div>
    </div>
  );
}
