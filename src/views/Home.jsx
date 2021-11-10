import { Menu } from "../components/Menu";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Menu />

      <div className={styles.container}>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil neque odio iste eaque, rem facere est ut itaque quas enim iure dolore saepe eveniet aliquid, nesciunt aliquam. At, voluptate.</p>
      </div>
    </div>
  );
}
