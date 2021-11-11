import { Menu } from '../components/Menu';

//Estilos
import styles from '../styles/post.module.css';

export default function Post(){
  return(<>
     <head>
      <title>Postagem | Pack Delivery</title>
    </head>

    <Menu />

    <div className={styles.container}>
      <h1>Nova postagem</h1>
      <h3>Em construção...</h3>
    </div>
  </>)
}