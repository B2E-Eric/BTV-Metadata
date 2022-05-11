import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Museum.module.css";
import { assets } from "../../assets/assets-mainnet";

export default function Museum() {
  const { type, numbering } = useParams();
  const asset = assets.find(({ type: assetType }) => assetType == type);
  const acronyms = new Map([
    ["rank", "RNK"],
    ["event", "EVT"],
    ["skin", "SKN"],
    ["xoletsa", "AVXT"],
    ["trexar", "AVTX"],
    ["visgalt", "AVVG"],
    ["hignos", "AVHN"],
    ["vunhuma", "AVVH"],
    ["avatar", "AVA"]
  ]
  );

  return (
    <div className={[styles.background, styles[asset.category]].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.card}>
          <div className={styles.preview}>
            <img alt="" src={"/frame/" + asset.rarity + ".png"} />
            <img
              className={styles.image}
              alt=""
              src={"/museum/" + type + ".png"}
            />
            <i>
              {acronyms.get(asset.category)}-00{type ?? "..."}-0{numbering ?? "0"}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
