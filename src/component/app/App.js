import React from "react";
import RouteComponent from "../routeComponent/RouteComponent";

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <RouteComponent/>
    </div>
  );
}

export default App;
