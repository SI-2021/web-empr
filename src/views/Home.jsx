import { Menu } from "../components/Menu";

import styles from "../styles/home.module.css";

export default function Home() {
  return (<>
    <head>
      <title>Home | Pack Delivery</title>
    </head>
    
    <div>
      <Menu />

      <div className={styles.container}>
        <h1>Home</h1>
        <h3>Em construção...</h3>
      </div>
    </div>
  </>);
}
