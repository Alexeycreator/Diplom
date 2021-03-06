import React from "react";
import s from "./OutlookCalendar.module.css";
import moment, { weekdays } from "moment";
import styled from "styled-components";
import HeaderCalendar from "./headerCalendar/HeaderOutlook";
import MonitorCalendar from "./monitorCalendar/MonitorOutlook";
import { updateLocale } from "moment";
import { calendarFormat } from "moment";

const startDay = moment().startOf("month").startOf("week"); //начало отсчета

//день календаря
const DayGrid = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

//элемент календаря
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) => (props.isHeader ? "black" : "gray")};
  ${(props) => props.isHeader && "border-bottom: 1px solid white"}
`;

//сетка календаря
const CellGrid = styled.div`
  min-width: 140px;
  min-height: ${(props) => (props.isHeader ? 30 : 80)}px;
  background-color: ${(props) => (props.isWeekend ? "#27282A" : "black")};
  color: ${(props) => (props.isSelectMonth ? "white" : "#555759")}; //55759
`;

//ряд календаря
const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && "padding-right: ${props.pr + 8}px"}
`;

//выбранный день
const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background: purple;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OutlookCalendar = ({ today, prevMath, nextMath, todayInMath, startDay }) => {
  const day = startDay.clone().subtract(1, "day");
  const totalDay = 42; //всего дней в календаре
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone()); //массив для элементов в календаре с расчетом на 6 недель

  //выбранные день и месяц
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <HeaderCalendar />
      <MonitorCalendar
        today={today}
        prevMath={prevMath}
        nextMath={nextMath}
        todayInMath={todayInMath}
      />
      <ItemGrid isHeader>
        {[
          ...Array(7).map((_, i) => (
            <CellGrid isHeader isSelectMonth>
              <RowInCell justifyContent={"flex-end"} pr={i}>
                {moment()
                  .day(i + 1)
                  .format("ddd")}
              </RowInCell>
            </CellGrid>
          )),
        ]}
      </ItemGrid>
      <ItemGrid>
        {daysArray.map((dayItem) => (
          <CellGrid
            key={(dayItem.format("DDMMYYYY"), dayItem.unix())}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectMonth={isSelectMonth(dayItem)}
          >
            <RowInCell justifyContent={"flex-end"}>
              <DayGrid>
                {!isCurrentDay(dayItem) && dayItem.format("D")}
                {isCurrentDay(dayItem) && (
                  <CurrentDay>{dayItem.format("D")}</CurrentDay>
                )}
              </DayGrid>
            </RowInCell>
          </CellGrid>
        ))}
      </ItemGrid>
    </>
  );
};

export default OutlookCalendar;