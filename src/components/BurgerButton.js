import { useContext } from "react";
import SettingsContext from "./SettingsContext";


function BurgerButton() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { menuVisible } = settings;
  return (
    <>
      <button className="menu-button" onClick={ () => { updateSettings({...settings, menuVisible:!menuVisible}) }}>
        <svg className="menu-icon" viewBox="0 0 100 100">
          <rect width="100" height="20" rx="10"></rect>
          <rect y="30" width="100" height="20" rx="10"></rect>
          <rect y="60" width="100" height="20" rx="10"></rect>
        </svg>

      </button>
    </>
  );
}
export default BurgerButton;
