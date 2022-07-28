import React from "react";
import styles from "./Default.module.css";
import { assets } from "../../assets/assets-mainnet";
import { useNavigate } from "react-router-dom";

export default function Default() {
  let navigate = useNavigate();


  return (
    <div className={styles.main}>
      <h1>BTV Museum</h1>
      <p>
        This static website is hosted on IPFS and indexes all the Beyond The Void Museum (NFT Collection) metadata.
      </p>

      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Rarity</th>
              <th>Category</th>
              <th>Original ERC-20</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(assets.length)].map((_, idx) => {
              const asset = assets.find(({type: t}) => t === idx);

              return (
                <tr key={idx}>
                  <td className={styles.id}>{idx}</td>
                  <td>
                    <img alt="" src={"/museum/" + idx + ".png"} />
                  </td>
                  <td onClick={() => {navigate(`/museum/${asset.type}`)}} className="selectable">{asset?.name}</td>
                  <td >{asset?.rarity}</td>
                  <td >{asset?.category}</td>
                  <td >{asset?.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
