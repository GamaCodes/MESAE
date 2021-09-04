import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#inicio"> - 2021 - </a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default FooterNav;
