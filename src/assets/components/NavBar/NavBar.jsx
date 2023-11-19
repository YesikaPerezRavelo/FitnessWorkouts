import React from "react";
import classes from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav
      className={classes.container}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h1 className={classes.h1}>Yes Workouts</h1>
      <section className={classes.categories}>
        <button className={classes.button}>ENTRENAMIENTOS</button>
        <button className={classes.button}>ALIMENTACIÓN</button>
        <button className={classes.button}>MASAJES</button>
        <button className={classes.button}>YOGA</button>
        <CartWidget />
      </section>
    </nav>
  );
};

export default NavBar;
