import db from "../services/database";
import { onValue, get, child, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Home = function () {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        onValue(ref(db, '/Pessoa'), response => {
            const data = response.val();

            const listPessoas = [];
            if (data) {
                for (let id in data) {
                    listPessoas.push(data[id]);
                }
                setPessoas(listPessoas)
            }
        })
    }, []);

    return (
        <table>
            {
                pessoas.map((pessoa, i) => 
                    <tr key={i}>
                        <td>{pessoa.nome_completo}</td>
                    </tr>
                )
            }
        </table>
    );

}

export default Home;