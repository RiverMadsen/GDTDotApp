import SettingsContext from "./SettingsContext";


export function HomePage({ settings, handleSettingsChange }) {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        The menu is initally hydrated from static JSON that contains the
        following menuElements (MEs): HOME, Downloads, Help, Contribute, and
        About. Every ME has:
      </p>
      <ol>
        <li>
          An <strong>ID</strong> that is a base36 random number between 1 and
          one trillion.{" "}
        </li>
        <li>
          An array of 0 or many childIDs <strong>children</strong>. When there
          are no children for a ME, then the menu disappears and the contente is
          hydrated. If the ME does have children, the ellipses "..." are
          appended to the menu text string, and when the user taps on it, those
          child MEs will appear.
        </li>
        <li>
          A <strong>menuText property. Example: Section A</strong>
        </li>
        <li>
          A <strong>secondaryMenuText</strong> property which appears in a
          smaller font - Example: International Border to Coleman
        </li>
        <li>
          <strong>dateCreated/dateUpdate</strong> When the user is online, a
          json file containing the most recent dateUpdated for every ID is
          downloaded and compared to the users indexDB. New files are downloaded
          if necessary. If the user is working with only one section due to
          space limits, then only the updates for that section are brought dow.
        </li>
        <li>
          An array of <strong>proposedEdits (PEs)</strong> which hold edits
          proposed by others that the current user can vote on
        </li>
        <li>
          An array of <strong>userEdits (UEs)</strong>This array holds the users
          current edits
        </li>
        <li>
          <strong>content</strong> - content will vary from one ME to another
          base on the type property of ME. It is the content property that can
          be edited by users
        </li>
      </ol>
      <h2>DOWNLOADS</h2>
      Downloads are broken down by section so that users can hydrate just a
      small portion of the trail at one time if they choose.{" "}
      <ol>
        <li>
          Downloads are zip files named for their section (e.g. 'SectionA.zip',
          'SectionB.zip'...There is also an "AllSections.zip" - regardless of what section you choose to download, AllSections.zip (which is quite small) comes along for the ride.
        </li>
        <li>
          Within each zip file are the following json files: Maps.json,
          Trails.json, UserImages.json, GuidebookImages.json, 3DImages.json,
          Guidebook.json, DayByDay.json.
        </li>
        <li>Maps.json have the topogrpapic basemaps at levels 1-13 (for "AllTrails.json") and 14-15 for the section json files. These are mapped to the indexedDB stores SectionA-maps and SectionA-detailedMaps respectively.</li>
        <li>Trails.json has the geometry for all of the trails, alternate routes, exit routes, and side routes for that section. AllTrails.json has a generalized route appropriate for zoom level 12-13. These are placed in the stores AllTrail-mainRoute, Section#-mainRoute, Section#-alternateRoute, Section#-sideRoutes, Section#-ExitRoutes respectively.</li>
        <li>GuidebookImages, UserImages, DayByDayImages, and 3D images are stored in SectionA_JsonImageName in indexedDDB.  In the AllTrails.json, only images for parts of the guidebook up to and including sections (but not days) are included.</li>
        <li>Guidebook and DayByDay are the JSON files that contain menuItems (MEs) and are used to build out the menu. At the toplevel of Guidebook is a single ME with the menuText 'The Great Divide Trail' which has Section children. For each download (e.g. SectionC.zip), only that section will have children properties array while the others will lead to a page that asks you to visit the downloads page to load that section. </li>
      </ol>
      END OF FILE
    </div>
  );
}
export default HomePage;
