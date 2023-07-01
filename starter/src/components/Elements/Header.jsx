import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h2 className={classes.title}>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className={classes.linkBtn}>Home</button>
        </Link>
        <Link to="recipe">
          <button className={classes.linkBtn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
