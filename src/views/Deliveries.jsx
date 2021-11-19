import { Status } from '../components/Status';
import { Menu } from '../components/Menu';
import { Path } from '../components/Path';

import styles from '../styles/deliveries.module.css';

export default function Deliveries(params){
  const object = {
    name: 'Objeto X',
    type: "Objeto Frágil",
    height: 30,//em cm
    width: 30, //em cm
    length: 30, //em cm
    weight: 400, //em gramas
    boxShape: "Retangular",
  }
  const delivery = {
    status: "onCarriage",
    cost: 53.21, //em R$
    transportType: "Pequeno",
    deliveryman: "JoãoX", //ID do perfil do entregador
    timeLeft: 50, //em minutos
    totalTime: 120, //em minutos
    sender: "My", //ID do remetente
    recipient: { //ID do destinatário
      name: "Fulano de Tal",
      address: "Endereço: Rua Figueiredo, 1043 - Três Lagoas, MS",
    },
    trafficHistory: [
      {
        description: 'Objeto saiu de Bauru, SP',
        date: '04/11/2021',
        hour: '20:32'
      },
      {
        description: 'Chegou ao Centro de Distribuição de Araçatuba,SP',
        date: '04/11/2021',
        hour: '23:06'
      },
      {
        description: 'Objeto saiu do CD Araçatuba,SP',
        date: '05/11/2021',
        hour: '08:36'
      },
      {
        description: 'Em trânsito para Três Lagoas, MS',
        date: '05/11/2021',
        hour: '09:01'
      },
    ]
  }


  return(<>
    {console.log(params)}
    <head>
      <title>Destalhes | Pack Delivery</title>
    </head>

    <Menu />
    <div className={styles.app}>
      <div className={styles.container}>
        <header>
          <h1>{object.name}</h1>
          <Status state={delivery.status}/>
        </header>

        <main>
          <h2>Detalhes</h2>
          <div className={styles.contentObject}>
            <div>
              <p><strong>{object.type}</strong></p>
              <p><strong>Altura:</strong> {object.height} cm</p>
              <p><strong>Largura:</strong> {object.width} cm</p>
              <p><strong>Comprimento:</strong> {object.length} cm</p>
            </div>

            <div>
              <p><strong>Peso:</strong> {object.weight}g</p>
              <p><strong>Formato da caixa:</strong> {object.boxShape}</p>
              <p><strong>Tipo de transporte:</strong> {delivery.transportType}</p>
            </div>

            <div>
              <strong>Destinatário:</strong>
              <p>{delivery.recipient.name}</p>
              <p>{delivery.recipient.address}</p>
            </div>
          </div>
        </main>

        <article>
          <h2>Trânsito do objeto</h2>

          <ul>
            {delivery.trafficHistory.map( (item, index) => {
              return(<li key={index}>{item.description} - {item.hour} - {item.date}</li>)
            })}
          </ul>
        </article>

        <footer>
          <Path value={Math.floor((delivery.timeLeft/delivery.totalTime)*100)} status={delivery.status} />
          <span>Previsão de entrega em {delivery.timeLeft} min.</span>
        </footer>
      </div>
    </div>
  </>)
}