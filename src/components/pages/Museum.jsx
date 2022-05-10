import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Museum.module.css";
import { assets } from "../../assets/assets-mainnet";

export default function Museum() {
  const { type, numbering } = useParams();
  const asset = assets.find(({ type: assetType }) => assetType == type);

  return (
    <div className={styles.background}>
    <div className={styles.frame}>
      <div className={styles.card}>
        <div className={styles.preview}>
          <img  alt="" src="/frame/epic.png" />
          <img className={styles.image} alt="" src={"/museum/" + type + ".png"} />
        </div>
      </div>
    </div>
    </div>
  );
}
