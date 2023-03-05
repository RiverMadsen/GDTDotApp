//import React from "react";
import SettingsContext from "./SettingsContext";
import { initializeApp } from "firebase/app";
import Link from "next/link";
import SectionCard from "./SectionCard";
import { useState, useEffect, useContext } from "react";

export function DownloadsPage() {
  const { settings, updateSettings } = useContext(SettingsContext);
  if (settings) {
    console.log("NUMBER OF DOWNLOADS " + settings.trailMenu.downloads.length);
  }

  // ALL - https://drive.google.com/file/d/1oUJQqcQkdouTq_epnrqWi8SxPWwCBXL5/view?usp=sharing
  //Section A - https://drive.google.com/file/d/1fQd8QqJE_dRzqEJwlXw7e8udC8L8SUui/view?usp=share_link
  return (
    <div>
      <p>
        On this page you can download the zip files for each section of the
        trail. Each zip file contains detailed maps, along with the main trail,
        alternate routes, a detailed description of the route, and hundreds of
        images.{" "}
        <span className="walki--important">
          Save each zip file to a location that you can easily remember - you
          will be asked to browse to the location of the zip files when you want
          to open a new section. To open a section, tap the tools icon on the map.
        </span>
      </p>
      <div>
        {settings.trailMenu.downloads.map((item) => {
          return <SectionCard name={item.name} description={item.description} zip={item.fileName} image={item.image}></SectionCard>;
        })}
      </div>
    </div>
  );
}
export default DownloadsPage;
