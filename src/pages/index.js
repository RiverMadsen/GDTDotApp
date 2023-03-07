import { useState, useEffect } from 'react';
import ESRIMap from '../components/EsriMap';
import MainContent from '../components/MainContent';
import BurgerButton from '../components/BurgerButton';
import ToolsButton from '../components/ToolsButton';
import SettingsContext from '../components/SettingsContext';
import { UserContext, UserContextProvider } from '../context/UserContext';
import Menu from '../components/Menu';
import Downloads from '../components/DownloadsPage';
import Footer from '../components/Footer';

function HomePage() {
  // const [menuJson, setMenuJson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./menu.json');
      const jsonData = await response.json();
      updateSettings({
        ...settings, screenHeight: screen.height, screenWidth: screen.width, trailMenu: jsonData,
      });
    };
    fetchData();
  }, []);

  const [settings, updateSettings] = useState({
    units: 'metric',
    screenHeight: -1,
    screenWidth: -1,
    gpsMode: 5,
    syncMode: true,
    sliderLeftPosition: 300,
    mainContentYPosition: 400,
    menuVisible: false,
    userMembershipVerified: false,
    userAuthenticated: false,
    userName: '',
    userPasswordHash: '',
    trailMenu: {},
    activeSection: 'NONE',
    activeMenuItem: {
      ID: '',
      children: [],
      type: '',
    },
  });

  const requestedX = 300;
  const requestedY = 150;
  if (typeof window !== 'undefined' && typeof screen !== 'undefined') {
    const newValue = {
      ...settings,
      screenHeight: screen.height,
      screenWidth: screen.width,
      sliderLeftPosition: screen.width - 50,
      mainContentYPosition: screen.height / 2,
    };
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      <UserContextProvider>
        <BurgerButton />
        <ToolsButton />
        <ESRIMap />
        <MainContent />
        <Menu />
        <Footer
          prevNav="<< Day 15"
          currentNav="Day 1"
          nextNav="Day 2 >>"
        />
      </UserContextProvider>
    </SettingsContext.Provider>
  );
}
export default HomePage;
