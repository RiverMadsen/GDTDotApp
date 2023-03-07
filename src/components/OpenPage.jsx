import React, { useState, useContext, useRef } from 'react';
import JSZip from 'jszip';
import SettingsContext from './SettingsContext';
import styles from './OpenPage.module.css';
import { addToCollection } from './indexedDB.ts';

export function OpenPage() {
  addToCollection();
  // eslint-disable-next-line no-unused-vars
  const { settings } = useContext(SettingsContext);
  const [nameAndSize, updateNameAndSize] = useState('');

  const fileInputRef = useRef(null);

  async function readZipFile(file) {
    const { name: fileName, size } = file;
    const fileSize = (size / 1024).toFixed(2);
    const fileNameAndSize = `${fileName} - ${fileSize}KB`;
    updateNameAndSize(fileNameAndSize);
    const buffer = await file.arrayBuffer();
    const zip = await JSZip.loadAsync(buffer);
    const contents = {};

    Object.keys(zip.files).map(async (jsonFile) => {
      const theFile = zip.files[jsonFile];
      const data = await theFile.async('string');
      contents[jsonFile] = data;
    });

    return contents;
  }

  const handleFileSelect = () => {
    const file = fileInputRef.current.files[0];
    readZipFile(file).then((data) => {
      Object.keys(data).map((jsonFileName) => {
        const jsonFileContents = JSON.parse(data[jsonFileName]);
        console.log(jsonFileContents);
        return null;
      });
    });
  };

  return (
    <div>
      <p className="walki--critical">
        ACTIVE SECTION:
        {' '}
        {settings.activeSection}
        {' '}
      </p>

      <p>
        After downloading one or more sections of the trail as zip files, you
        can load them here. To keep the app running fast, only one section is
        loaded at a time.
      </p>

      <div>
        <br />
        <h6 className="walki--important">
          Browse to the zip file to make it active
        </h6>
        <br />
        <div className={styles.fileinput}>
          <input
            type="file"
            id="file"
            className={styles.file}
            ref={fileInputRef}
            accept=".zip"
            onChange={() => handleFileSelect()}
          />
          <label htmlFor="file">
            Select file
            <p className={styles.filename}>{nameAndSize}</p>
          </label>
        </div>
      </div>
    </div>
  );
}
export default OpenPage;
