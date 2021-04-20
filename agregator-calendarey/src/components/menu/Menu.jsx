import React from "react";
import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className={s.menu}>
      <div className={s.viborServisa}>Выберите сервис:</div>
      <div className={s.item}>
        <NavLink to="/googleCalendar" className={s.activeLink}>
          Google Календарь
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/outlookCalendar" className={s.activeLink}>
          Outlook Календарь
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/yandexCalendar" className={s.activeLink}>
          Yandex Календарь
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/mailCalendar" className={s.activeLink}>
          MailRU Календарь
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/agregatorCalendar" className={s.activeLink}>
          Агрегатор Календарей
        </NavLink>
      </div>
    </nav>
  );
};

export default Menu;
