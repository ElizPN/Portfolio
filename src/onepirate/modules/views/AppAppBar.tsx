import * as React from "react";
import AppBar from "../components/AppBar";
import DrawerAppBar from "./DrawerAppBar";

function AppAppBar() {
  return (
    <div>
      <AppBar position='fixed'>
        <DrawerAppBar></DrawerAppBar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
