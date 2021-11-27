import { Menu } from "../components/Menu";
import { Delivery } from "../components/Delivery";

//estilos
import styles from "../styles/home.module.css";

//pagina home
export default function Home() {
  return (
    <>
      <head>
        <title>Home | Pack Delivery</title>
      </head>

      <div>
        <Menu />

        <div className={styles.container}>
          <div className={styles.contents}>
            <h1 className={styles.title}>Entregas em andamento</h1>
            <Delivery
              id={1}
              name={"Teste 2"}
              status={"onCarriage"}
              timeLeft={50}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={2}
              name={"Teste 3"}
              status={"waitingForTransport"}
              timeLeft={50}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={3}
              name={"Teste 4"}
              status={"lookingForDelivery"}
              timeLeft={50}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={4}
              name={"Teste 5"}
              status={"random"}
              timeLeft={50}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
          </div>
          <div className={styles.contents}>
            <h1 className={styles.title}>Entregas concluidas</h1>
            <Delivery
              id={5}
              name={"Teste 1"}
              status={"delivered"}
              timeLeft={50}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={6}
              name={"Teste 5"}
              status={"calledOff"}
              timeLeft={50}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
