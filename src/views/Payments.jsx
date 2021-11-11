import { Menu } from '../components/Menu';

//Estilos
import styles from '../styles/payments.module.css'

export default function Payment(){
  return(<>
     <head>
      <title>Pagamentos | Pack Delivery</title>
    </head>

    <Menu />
    
    <div className={styles.container}>
      <h1>Pagamentos</h1>
      <h3>Em construção...</h3>
    </div>
  </>)
}