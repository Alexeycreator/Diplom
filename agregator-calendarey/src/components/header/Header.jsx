import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.TXTcenter}>
        <img src="https://static8.depositphotos.com/1229718/1053/i/600/depositphotos_10534576-stock-photo-calendar-date.jpg"></img>
        Веб-приложение "Агрегатор календарей"
        <img src="https://static8.depositphotos.com/1229718/1053/i/600/depositphotos_10534576-stock-photo-calendar-date.jpg"></img>
      </div>
    </div>
  );
};

export default Header;