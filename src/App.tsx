import React from "react";
import styles from "./app.module.scss";
import Routes from "./routes/Routes";

function App() {
    return (
        <div className={styles.app}>
            <Routes />
        </div>
    );
}

export default App;
