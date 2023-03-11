import React from "react";
import styles from './app.module.scss';
import HomePage from "../pages/HomePage";

function App() {
  return (
    <div className={styles.wrapper}>
      <HomePage/>
    </div>
  );
}

export default App;
