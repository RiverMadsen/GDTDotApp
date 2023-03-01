import ESRIMap from "../components/EsriMap";
import MainContent from "@/components/MainContent";
import BurgerButton from "@/components/BurgerButton";
import ToolsButton from "@/components/ToolsButton";
import SettingsContext from "../components/SettingsContext";
import Menu from "../components/Menu";
import { useState } from "react";
import Downloads from "@/components/DownloadsPage";
import Footer from "../components/Footer";

function HomePage() {
  const [settings, updateSettings] = useState({
    units: "metric",
    screenHeight: -1,
    screenWidth: -1,
    gpsMode: 5,
    syncMode: true,
    sliderLeftPosition: 300,
    mainContentYPosition: 400,
    menuVisible: false,
    userAuthenticated: false,
    userName: '',
    userPasswordHash: '',
    activeMenuItem: {
      ID: "",
      children: [],
      type: "",
    },
  });

  let requestedX = 300;
  let requestedY = 150;
  if (typeof window !== "undefined" && typeof screen !== "undefined") {
    const newValue = {
      ...settings,
      screenHeight: screen.height,
      screenWidth: screen.width,
      sliderLeftPosition: screen.width - 50,
      mainContentYPosition: screen.height / 2,
    };
    //debugger
    //updateSettings(newValue);
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      <BurgerButton></BurgerButton>
      <ToolsButton></ToolsButton>
      <ESRIMap></ESRIMap>
      <MainContent></MainContent>
      <Menu></Menu>
      <Footer
        prevNav="<< Day 15"
        currentNav="Day 1"
        nextNav="Day 2 >>"
      ></Footer>
    </SettingsContext.Provider>
  );
}
export default HomePage;
