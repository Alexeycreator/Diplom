import logo from "./logo.svg";
import "./App.css";
import GoogleCalendar from "./components/googleCalendar/GoogleCalendar";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="AppMain">
        <GoogleCalendar />
      </div>
    </div>
  );
}

export default App;
