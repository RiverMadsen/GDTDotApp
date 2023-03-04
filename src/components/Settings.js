import { useState } from "react";
import React from "react";
import SettingsContext from "./SettingsContext";

export function Settings({ settings, handleSettingsChange }) {

  return (
    <div
      onClick={() => handleSettingsChange()}
    >


        Setting div
    </div>
  );
}
export default Settings;