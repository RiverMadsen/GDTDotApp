import Auth from "./Auth";
import DashboardPage from "./DashboardPage";
import { useUserContext } from "../context/UserContext";

function AppDashPage() {
  const { user, loading, error } = useUserContext();
  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <DashboardPage /> : <Auth />} </>}
    </div>
  );
}

export default AppDashPage;
