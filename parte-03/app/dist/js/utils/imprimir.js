export function imprimir(...objetos) {
    for (let objeto of objetos) {
        console.log(JSON.stringify(objeto.paraTexto()));
    }
}
