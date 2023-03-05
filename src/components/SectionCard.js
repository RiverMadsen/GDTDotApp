import React from "react";
import styles from "./SectionCard.module.css";
import Image from "next/Image";

export default function SectionCard(props) {
  return (
    <div className={styles.sectionCardContainer}>
      <Image
        className={styles.sectionCardImage}
        src={"/images/" + props.image}
        width="100"
        height="100"
        alt="picture"
      ></Image>
      <div className={styles.header}>{props.name}</div>
      <div>{props.description}</div>
      <div className="walki--link">Download Now</div>
    </div>
  );
}
