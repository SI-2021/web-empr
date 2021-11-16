import { Menu } from "../components/Menu";
import { Delivery } from "../components/Delivery";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <head>
        <title>Home | Pack Delivery</title>
      </head>

      <div>
        <Menu />

        <div className={styles.container}>
          <div className={styles.contentDeliverys}>
            <h1 className={styles.title}>Entregas em andamento</h1>
            <Delivery
              name={"Teste 1"}
              status={"delivered"}
              timeLeft={50}
              course={"Três lagoas, MS"}
            />
            <Delivery
              name={"Teste 2"}
              status={"onCarriage"}
              timeLeft={50}
              course={"Três lagoas, MS"}
            />
            <Delivery
              name={"Teste 3"}
              status={"waitingForTransport"}
              timeLeft={50}
              course={"Três lagoas, MS"}
            />
            <Delivery
              name={"Teste 4"}
              status={"lookingForDelivery"}
              timeLeft={50}
              course={"Três lagoas, MS"}
            />
            <Delivery
              name={"Teste 5"}
              status={"calledOff"}
              timeLeft={50}
              course={"Três lagoas, MS"}
            />
            <Delivery
              name={"Teste 5"}
              status={"random"}
              timeLeft={50}
              course={"Três lagoas, MS"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
