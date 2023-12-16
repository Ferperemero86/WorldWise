import { Outlet } from "react-router-dom";
import AppNav from "@/components/AppNav/AppNav";
import Logo from "@/components/Logo/Logo";
import Footer from "@/components/Footer/Footer";

import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer styles={styles} />
    </div>
  );
}

export default Sidebar;
