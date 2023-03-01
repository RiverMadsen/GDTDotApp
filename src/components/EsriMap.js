import { useContext } from "react";
import SettingsContext from "./SettingsContext";

function ESRIMap() {
  const {settings, updateSettings} = useContext(SettingsContext);
  
  const handleMapClickCloseMenu = () => {
    if(settings.menuVisible) {
      updateSettings({...settings, menuVisible: false});
    }
  }
  return (
    <>
      <div className="esriMap" onClick={ () => {handleMapClickCloseMenu()}}>
        
        <img src="../images/dummyMap.png" width="100%"  height="100%" />
      </div>
      
    </>
  );
}
export default ESRIMap;
