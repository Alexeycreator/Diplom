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
import moment from "moment";
import MenuTwo from "./components/menuTwo/MenuTwo";

function App(props) {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  //навигация по календарям
  const prevMath = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const nextMath = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };
  const todayInMath = () => {
    setToday(moment());
  };

  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="AppMain">
        <Route
          path="/googleCalendar"
          render={() => (
            <GoogleCalendar
              today={today}
              startDay={startDay}
              prevMath={prevMath}
              nextMath={nextMath}
              todayInMath={todayInMath}
            />
          )}
        ></Route>
        <Route
          path="/yandexCalendar"
          render={() => (
            <YandexCalendar
              today={today}
              startDay={startDay}
              prevMath={prevMath}
              nextMath={nextMath}
              todayInMath={todayInMath}
            />
          )}
        ></Route>
        <Route
          path="/outlookCalendar"
          render={() => (
            <OutlookCalendar
              today={today}
              startDay={startDay}
              prevMath={prevMath}
              nextMath={nextMath}
              todayInMath={todayInMath}
            />
          )}
        ></Route>
        <Route
          path="/agregatorCalendar"
          render={() => (
            <AgregatorCalendar
              today={today}
              startDay={startDay}
              prevMath={prevMath}
              nextMath={nextMath}
              todayInMath={todayInMath}
            />
          )}
        ></Route>
        <Route
          path="/mailCalendar"
          render={() => (
            <MailCalendar
              today={today}
              startDay={startDay}
              prevMath={prevMath}
              nextMath={nextMath}
              todayInMath={todayInMath}
            />
          )}
        ></Route>
      </div>
    </div>
  );
}

export default App;