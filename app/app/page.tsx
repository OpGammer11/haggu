import Image from "next/image";
import styles from "../page.module.scss";
import { SplineViewer } from "../components/Threed";

export default function App() {
  return (
    <div className={styles.container}>
      <SplineViewer eventsTarget="global" />
    </div>
  );
}
