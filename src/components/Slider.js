import { useContext,useRef, useState } from "react";
import SettingsContext from "./SettingsContext";

export function Slider() {
  const sliderRef = useRef(null);
  const { settings, updateSettings } = useContext(SettingsContext);
  let {sliderLeftPosition} = settings;
  let {mainContentYPosition} = settings;
  //debugger
  //const defaultX = screen.width - 30; //sliderRef.current.getBoundingClientRect().x;
  //const [leftPosition, updateLeftPosition] = useState(defaultX);
  const syncMode = settings.syncMode;
  
  // const handleTouchMove = (event) => {
  //   const touch = event.touches[0];
  //   const x = touch.clientX;
  //   console.log(x);
  // };
  //window.addEventListener('touchmove', handleTouchMove);

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
        debugger
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
