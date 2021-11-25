const validaEntrega = (entrega) => {
    for (let obj in entrega) {
        for (let prop in entrega[obj]) {

            if (prop === "complement") continue;
            
            let valor = entrega[obj][prop];
            if (valor === null || valor ==="" || valor === 0) {
                return false;
            }
        }
    }

    return true;
}

export { validaEntrega }