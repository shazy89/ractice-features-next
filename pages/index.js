import { useEffect } from "react";
import { getAllEvents } from "../helpers/api-utils";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => getAllEvents(), [getAllEvents]);
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
    </div>
  );
}
