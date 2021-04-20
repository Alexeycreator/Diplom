import "./App.css";
import GoogleCalendar from "./components/googleCalendar/GoogleCalendar";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import { Route } from "react-router";
import YandexCalendar from "./components/yandexCalendar/YandexCalendar";
import OutlookCalendar from "./components/outlookCalendar/OutlookCalendar";
import AgregatorCalendar from "./components/agregatorCalendar/AgregatorCalendar";
import MailCalendar from "./components/mailCalendar/MailCalendar";
import { useState } from "react";
import moment from 'moment';

function App(props) {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="AppMain">
        <Route path="/googleCalendar" render={() => <GoogleCalendar />}></Route>
        <Route path="/yandexCalendar" render={() => <YandexCalendar />}></Route>
        <Route
          path="/outlookCalendar"
          render={() => <OutlookCalendar />}
        ></Route>
        <Route
          path="/agregatorCalendar"
          render={() => <AgregatorCalendar />}
        ></Route>
        <Route path="/mailCalendar" render={() => <MailCalendar />}></Route>
      </div>
    </div>
  );
}

export default App;
