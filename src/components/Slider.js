import { useContext,useRef, useEffect } from "react";
import SettingsContext from "./SettingsContext";

export function Slider() {
  const sliderRef = useRef(null);
  const { settings, updateSettings } = useContext(SettingsContext);
  let {sliderLeftPosition} = settings;
  let {mainContentYPosition} = settings;
  const syncMode = settings.syncMode;

  useEffect( () => {
    console.log("I am an effect in the slider")
    updateSettings({...settings, screenHeight: screen.height , screenWidth: screen.width,sliderLeftPosition: 300, mainContentYPosition: 300})

  }, [])

  const handleSliderMoved = ( (event) => {
    //return;
    if (sliderRef.current) {
      if(typeof window !== 'undefined'){
        if(settings.screenHeight === -1){
          updateSettings({...settings, screenHeight: screen.height})
          console.log(settings.screenHeight)
        }
      }
      else{
        //debugger
      }
      let xPos = event.touches[0].clientX;
      let yPos = event.touches[0].clientY;
      console.log("YPOS " + yPos);
      xPos = xPos < 0 ? 0: xPos;
      xPos = xPos > screen.width-sliderRef.current.clientWidth-4 ? screen.width-sliderRef.current.clientWidth-4 : xPos;
      yPos = yPos < 50 ? 50 : yPos;
      yPos = yPos > screen.height - 100 ? screen.height - 100 : yPos;
      updateSettings({...settings, mainContentYPosition: yPos , sliderLeftPosition: xPos});
      if(settings.screenHeight === -1){
        updateSettings({...settings, screenHeight: screen.height , screenWidth: screen.width});
      }
    }
    else{
      console.log(`SLIDER no`);
    }
  });
  //return <div>hello</div>
  return (
    <div ref={sliderRef} style={{ left: sliderLeftPosition, top: mainContentYPosition }}
      className={syncMode ? "slider syncSet" : "slider syncUnset"}
      onClick={() => {
        updateSettings({ ...settings, syncMode: !syncMode });
      }}
      onTouchStart={() => {
        console.log("SLIDERTS");
      }} 
        onTouchMove={(event) => {
        handleSliderMoved(event);
      }}
    ></div>
  );
}
export default Slider;
