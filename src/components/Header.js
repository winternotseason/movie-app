import React, { Fragment } from "react";
import "./Header.scss";
const Header = () => {
  return (
    <Fragment>
        <div className="header">
          MOVIEINFO
        </div>
      <div className="nav">
        <ol>박스오피스</ol>
        <ol>실시간예매율</ol>
        <ol>주간예매율</ol>
      </div>
    </Fragment>
  );
};

export default Header;
