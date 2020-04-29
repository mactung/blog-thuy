import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <AppBar>
      <Toolbar>
        <NavLink to="/blog">
          <Button>Blog</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
