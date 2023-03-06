import React from "react";
import styles from "./SectionCard.module.css";
import Image from "next/Image";
import Link from "next/link"

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
      <a  href={props.zip} className="walki--link">Download</a>
    </div>
  );
}
