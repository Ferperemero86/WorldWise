import styles from "./AppLayout.module.scss";

import User from "@/components/User/User";
import Sidebar from "@/components/Sidebar/Sidebar";
import Map from "@/components/Map/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
