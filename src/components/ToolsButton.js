import { useContext } from "react";
import SettingsContext from "./SettingsContext";

function ToolsButton() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { menuVisible } = settings;
  return (
    <>
      <button
        className="tools-button"
        onClick={() => {
          alert("test");
        }}
      >
        <div className="tools-icon">
          5
        </div>
      </button>
    </>
  );
}
export default ToolsButton;
