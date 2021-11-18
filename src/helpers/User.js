const normalizarUser = (user) => {
    const props = [
        "nome",
        "sobrenome",
        "cpf",
        "rg",
        "endereco",
        "cidade",
        "estado",
        "pais",
        "complemento",
        "cep",
        "email",
        "celular",
        "telefone",
        "entregador"
    ]

    const props_entregador = [
        "cnh",
        "placa_veiculo",
        "renavan"
    ]

    for (let prop of props) {
        if (!user[prop]) user[prop] = "";

        if (prop === "entregador") {
            if (!user.entregador) {
                user.entregador = {};
                continue;
            }

            for (let prop_entregador of props_entregador) {
                if (!user.entregador[prop_entregador]) user.entregador[prop_entregador] = "";
            }
        }
    }

    return user;
}

const saveUser = (set, ref, db, userObj) => {
    set(ref(db, `/Pessoa/${userObj.id}`), userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
}

export { normalizarUser, saveUser };