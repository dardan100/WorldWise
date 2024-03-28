import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

// export default function AppLayout() {
//   return (
//     <div className={styles.app}>
//       <Sidebar />
//       <Map />
//     </div>
//   );
// }

import React from "react";
import User from "../components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
