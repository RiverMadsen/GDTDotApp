import SettingsContext from "./SettingsContext";
import { useContext } from "react";
function Menu() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const menuVisible = settings.menuVisible;

  const { activeMenuItem } = settings;
  // 
  if (activeMenuItem.ID === "") {
    console.log("Init menu");
    //updateSettings({ ...settings, activeMenuItem: initMenuData });

  }

  const handleMenuItemClick = ({item}) => {
    const {type, children} = item
    if(children.length === 0){
      updateSettings({...settings, menuVisible:false, activeMenuItem: item})
    }
    console.log(type)
  };

  return (
    <div className={menuVisible ? "menu showMenu" : "menu hidden"}>
      <div className="menuHeader">
        <div className="menuItemIcon">H</div>
        <h2 className="menuHeaderText">MENU</h2>
        <div className="right menuItemIcon">&lt;</div>
      </div>

      <ul className="menuList">
        {initMenuData.map((item) => {
          return (
            <div className="menuItem">
              <li>
                <div className="menuItemIcon">{item.menuIcon}</div>
                <div
                  className="primaryMenuText"
                  key={item.ID}
                  onClick={() => {
                    handleMenuItemClick({ item });
                  }}
                >
                  {" "}
                  {item.menuText} {item.children.length > 0 ? "..." : ""}{" "}
                </div>
                <div className="secondaryMenuText">{item.secondaryText}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
const initMenuData = [
  {
    ID: "Home",
    type: "home",
    menuText: "Welcome to Walkipedia",
    content: "This is stuff relevant to the Home Page",
    menuIcon: "H",
    children: [],
  },
  {
    ID: "Login",
    type: "login",
    menuText: "Login",
    menuIcon: "L",
    content: "This is stuff relevant to the Login page",
    children: [],
  },
  {
    ID: "Downloads",
    type: "downloads",
    menuText: "Downloads",
    menuIcon: "D",
    content: "This is stuff relevant to the downloads page",
    children: ["sfdg"],
  },
  {
    ID: "About",
    type: "text",
    menuText: "About This Guide",
    secondaryText: "International Border to Coleman",
    content: "This is stuff relevant to the About Page",
    menuIcon: "A",
    children: [],
  },
  {
    ID: "Settings",
    type: "settings",
    menuText: "Settings",
    menuIcon: "S",
    content: "This is stuff relevant to the Help Page",
    children: [],
  },
  {
    ID: "Help",
    type: "help",
    menuText: "Help",
    secondaryText: "Everythin you need to know to use the app!",
    content: "This is stuff relevant to the Help Page",
    menuIcon: "i",
    children: [],
  },
  {
    ID: "Contribute",
    type: "text",
    menuText: "Contribute",
    content: "This is stuff relevant to the Contribute page",
    menuIcon: "$",
    children: [],
  },
];
export default Menu;
