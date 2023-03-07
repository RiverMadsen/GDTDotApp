import {
  useContext, useEffect, useState,
} from 'react';
import SettingsContext from './SettingsContext';
import styles  from  './DayPage.module.css';

import React from 'react';

export function DayPage() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const [localState, updateLocalState] = useState({ examplePieceOfState: true });

  useEffect(() => {
    updateSettings({ ...settings, mySetting: true });
    updateLocalState({ ...localState, examplePieceOfState: false });
  }, []);

  // TypeScript demonstration
  type Person = {
    name: string;
    age: number;
  };
  function addTwoNumbers(personA: Person, personB: Person) {
    return  personA.age + personB.age;
  }

  return (
    <div>
      <h2 className={styles.bb}>Day Page</h2>

    </div>
  );
}
export default DayPage;
