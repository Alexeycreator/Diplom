import React from "react";
import styled from "styled-components";

const DivWrapper = styled("div")`
  background-color: aqua;
  height: 30px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

const HeaderCalendar = () => {
  return <DivWrapper>Google Календарь</DivWrapper>;
};

export default HeaderCalendar;
