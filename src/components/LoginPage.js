import SettingsContext from "./SyncContext";

export function LoginPage({ settings, handleSettingsChange }) {
  return (
    <div>
      <form>
        <label for="email">EMail</label>
        <input id="email" type="email"></input>
        <label for="password">password</label>
        <input id="password" type="password"></input>
      </form>
    </div>
  );
}
export default LoginPage;