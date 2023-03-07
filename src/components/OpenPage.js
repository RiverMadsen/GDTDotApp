import { useState, useContext, useRef } from "react";
import React from "react";
import SettingsContext from "./SettingsContext";
import JSZip from "jszip";
import styles from "./OpenPage.module.css";
import { createCollections } from "./indexedDB";

export function OpenPage() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const [nameAndSize, updateNameAndSize] = useState("");
  const xx = "test";
  const fileInputRef = useRef(null);
  const handleFileSelect = (event) => {
    const file = fileInputRef.current.files[0];
    readZipFile(file).then((data) => {
      Object.keys(data).map((jsonFileName) => {
        const jsonFileContents = JSON.parse(data[jsonFileName]);
        console.log(jsonFileContents);
      });
    });
  };

  async function readZipFile(file) {
    const { name: fileName, size } = file;
    const fileSize = (size / 1024).toFixed(2);
    const fileNameAndSize = `${fileName} - ${fileSize}KB`;
    updateNameAndSize(fileNameAndSize);
    const buffer = await file.arrayBuffer();
    const zip = await JSZip.loadAsync(buffer);
    const contents = {};
    for (const filename in zip.files) {
      const file = zip.files[filename];
      if (file.dir) continue;
      const data = await file.async("string");
      contents[filename] = data;
    }
    return contents;
  }

  return (
    <div>
      <p className="walki--critical">
        ACTIVE SECTION: {settings.activeSection}{" "}
      </p>

      <p>
        After downloading one or more sections of the trail as zip files, you
        can load them here. To keep the app running fast, only one section is
        loaded at a time.
      </p>

      <div>
        <br></br>
        <h6 className="walki--important">
          Browse to the zip file to make it active
        </h6>
        <br></br>
        <div className={styles.fileinput}>
          <input
            type="file"
            id="file"
            className={styles.file}
            ref={fileInputRef}
            accept=".zip"
            onChange={() => handleFileSelect(event)}
          ></input>
          {
            <label for="file">
              Select file
              <p className={styles.filename}>{nameAndSize}</p>
            </label>
          }
        </div>
      </div>
    </div>
  );
}
export default OpenPage;
