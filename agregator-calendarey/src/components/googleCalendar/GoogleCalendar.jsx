import React from "react";
import s from "./GoogleCalendar.module.css";
import moment, { weekdays } from "moment";
import styled from "styled-components";

const startDay = moment().startOf("month").startOf("week"); //начало отсчета

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  grid-gap: 1px;
  background-color: ${(props) => (props.isHeader ? "black" : "gray")};
  ${(props) => props.isHeader && "border-bottom: 1px solid white"}
`;

const GoogleCalendar = (props) => {
  const day = startDay.clone().subtract(1, "day");
  const totalDay = 42; //всего дней в календаре
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone()); //массив для элементов в календаре с расчетом на 6 недель

  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectMonth = (day) => today.isSame(day, "month");

  return <div className={s.main}>Календарь</div>;
};

export default GoogleCalendar;
