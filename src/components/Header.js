import React, { Fragment } from "react";
import "./Header.scss";
const Header = () => {
  return (
    <Fragment>
      <div className="header">
        MOVIEINFO
      </div>
      <div className="nav">
        <ol>일별 박스오피스</ol>
        <ol>주간 박스오피스</ol>
        <ol>주말 박스오피스</ol>
      </div>
    </Fragment>
  );
};

export default Header;
