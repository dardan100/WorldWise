import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <nav>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
    </nav>
  );
}
