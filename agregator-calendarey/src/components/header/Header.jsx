import React from "react";
import s from "./Header.module.css";
import styled from 'styled-components';

const TitleText = styled("div")`
  padding: 20px;
  text-align: center;
`;

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.TXTcenter}>
        <TitleText>Веб-приложение "Агрегатор календарей"</TitleText>
      </div>
    </div>
  );
};

export default Header;