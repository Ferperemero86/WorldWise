import styles from "./AppLayout.module.scss";

import Sidebar from "@/components/Sidebar/Sidebar";
import Map from "@/components/Map/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
