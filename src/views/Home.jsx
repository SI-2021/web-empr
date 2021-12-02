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
              id={0}
              name={"Teste"}
              status={"onCarriage"}
              timeLeft={0}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={1}
              name={"Teste 2"}
              status={"onCarriage"}
              timeLeft={70}
              totalTime={120}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={2}
              name={"Teste 3"}
              status={"waitingForTransport"}
              timeLeft={300}
              totalTime={300}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={3}
              name={"Teste 4"}
              status={"lookingForDelivery"}
              course={"Três lagoas, MS"}
            />
            <Delivery
              id={4}
              name={"Teste 5"}
              status={"random"}
            />
          </div>
          <div className={styles.contents}>
            <h1 className={styles.title}>Entregas concluidas</h1>
            <Delivery
              id={5}
              name={"Teste 1"}
              status={"delivered"}
            />
            <Delivery
              id={6}
              name={"Teste 5"}
              status={"calledOff"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
