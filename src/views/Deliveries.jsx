import { Status } from '../components/Status';

import styles from '../styles/deliveries.module.css';

export default function Deliveries(params){
  const name = 'Objeto X';
  const delivery = {
    status: "lookingForDelivery",
  }


  return(<>
    {console.log(params)}
    <head>
      <title>Destalhes | Pack Delivery</title>
    </head>
    <div className={styles.app}>
      <div className={styles.container}>
        <header>
          <h1>{name}</h1>
          <Status state={delivery.status}/>
        </header>
      </div>
    </div>
  </>)
}