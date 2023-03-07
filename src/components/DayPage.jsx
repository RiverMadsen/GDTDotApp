import {
  React, useContext, useEffect, useState,
} from 'react';
import SettingsContext from './SettingsContext';

export function DayPage() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const [localState, updateLocalState] = useState({ examplePieceOfState: true });

  useEffect(() => {
    updateSettings({ ...settings, mySetting: true });
    updateLocalState({ ...localState, examplePieceOfState: false });
  }, [settings, updateSettings, localState, updateLocalState]);

  return (
    <div>
      <h2>Day Page</h2>

    </div>
  );
}
export default DayPage;
