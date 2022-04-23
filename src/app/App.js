import "./App.css";
import NotificationTray from "../feature/notificationCenter/NotificationTray";
import NotificationCenter from "../feature/notificationCenter/NotificationCenter";

function App() {
  return (
    <>
      <div className="item-center">
        <h1>Notification Center</h1>
      </div>
      <NotificationCenter />
      <NotificationTray />
    </>
  );
}

export default App;
