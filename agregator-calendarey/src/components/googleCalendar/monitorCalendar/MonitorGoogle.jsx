import React from "react";
import styled from "styled-components";

const BtnWrapper = styled("button")`
  border: unset;
  background-color: #565759;
  height: 30px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  outline: unset;
`;

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  pudding: 16px;
  background-color: gray;
`;

const TextWrapper = styled("span")`
  font-size: 32px;
`;

//использование наследования представлено ниже

//месяц и год
const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

//кнопки переключения
const TodayBtn = styled(BtnWrapper)`
  pudding-right: 16px;
  pudding-left: 16px;
  font-weight: bold;
`;

const MonitorCalendar = ({ today, prevMath, nextMath, todayInMath }) => {
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format("MMMM")}</TitleWrapper>
        <TitleWrapper>{today.format("YYYY")}</TitleWrapper>
      </div>
      <div>
        <BtnWrapper onClick={prevMath}>&lt;</BtnWrapper>
        <BtnWrapper onClick={todayInMath}>Today</BtnWrapper>
        <BtnWrapper onClick={nextMath}>&gt;</BtnWrapper>
      </div>
    </DivWrapper>
  );
};

export default MonitorCalendar;
