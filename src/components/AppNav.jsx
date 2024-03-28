import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink to="cities">
          <li>cities</li>
        </NavLink>

        <NavLink to="countries">
          <li>contries</li>
        </NavLink>
      </ul>
    </nav>
  );
}
