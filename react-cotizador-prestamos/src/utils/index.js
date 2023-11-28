// eslint-disable-next-line no-unused-vars
const formMoney = (valor) => {
    const formatter = new Intl.NumberFormat('es-MX', {
        style:'currency',
        currency: 'MXN'
    });
    return formatter.format(valor);
}

export {
    formMoney
}