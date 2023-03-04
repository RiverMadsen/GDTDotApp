import MainContentHeader from "./MainContentHeader";
import Slider from "./Slider";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import DownloadsPage from "./DownloadsPage";
import HomePage from "./HomePage";
import TextPage from "./TextPage";
import WaylinePage from "./WaylinePage";
import WaypointPage from "./WaypointPage";
import DayPage from "./DayPage";
import SectionPage from "./SectionPage";
import Settings from "./Settings";
import SettingsPage from "./SettingsPage";
import HelpPage from "./HelpPage";
import DashboardPage from "./DashboardPage";
import AppDashPage from "./AppDashPage";

function MainContent() {
  console.log("render main contents");
  const { settings, updateSettings } = useContext(SettingsContext);
  const activeMenuItemType = settings.activeMenuItem.type;
  let reactPageComponent = <HomePage />;
  if (activeMenuItemType === "downloads") {
    reactPageComponent = <DownloadsPage />;
  }
  if (activeMenuItemType === "home") {
    reactPageComponent = <HomePage />;
  }
  if (activeMenuItemType === "section") {
    reactPageComponent = <SectionPage />;
  }
  if (activeMenuItemType === "day") {
    reactPageComponent = <DayPage />;
  }
  if (activeMenuItemType === "waypoint") {
    reactPageComponent = <WaypointPage />;
  }
  if (activeMenuItemType === "login") {
    reactPageComponent = <AppDashPage />;
  }
  if (activeMenuItemType === "wayline") {
    reactPageComponent = <WaylinePage />;
  }
  if (activeMenuItemType === "settings") {
    reactPageComponent = <SettingsPage />;
  }
  if (activeMenuItemType === "help") {
    reactPageComponent = <HelpPage />;
  }
  if (activeMenuItemType === "text") {
    reactPageComponent = <TextPage />;
  }
  if (activeMenuItemType === "elevation") {
    reactPageComponent = <ElevationPage />;
  }

  const handleMapClickCloseMenu = () => {
    if (settings.menuVisible) {
      updateSettings({ ...settings, menuVisible: false });
    }
  };

  const calculateOpacity = () => {
    return 
  }
  return (
    <>
      <Slider></Slider>
      <div className="bottomSection" style={{opacity:.2 + settings.sliderLeftPosition / 400, top: settings.mainContentYPosition, height: settings.screenHeight - settings.mainContentYPosition}} onClick={ () => {handleMapClickCloseMenu()} }>
        <div className="mainContent" style={{height: settings.screenHeight - settings.mainContentYPosition - 25}}>
          <MainContentHeader titleText="This was passed in from MainContent"></MainContentHeader>
          <div className="pageContent" >{reactPageComponent}</div>
        </div>

      </div>
    </>
  );
}
export default MainContent;
