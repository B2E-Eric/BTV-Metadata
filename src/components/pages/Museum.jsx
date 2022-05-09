import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Museum.module.css";
import { assets } from "../../assets/assets-mainnet";

export default function Museum() {
  const { type, numbering } = useParams();
  const asset = assets.find(({ type: assetType }) => assetType == type);

  return (
    <div className={styles.frame}>
      <div className={styles.card}>
        Asset type {type ?? "invalid"} n° {numbering ?? "invalid"}
        <br />
        <img alt="" src={"/museum/" + type + ".png"} />
        <h3>{asset.name}</h3>
        {asset.description}
      </div>
    </div>
  );
}
