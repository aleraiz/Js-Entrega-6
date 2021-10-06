class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

let listaPrendasSuperiores = []
let listaPantalones = []
let listaZapatos = []
let listaAccesorios = []

listaPrendasSuperiores.push(new Producto("Camiseta de tirantes","Camisetas" ,890))
listaPrendasSuperiores.push(new Producto("Camisa abotonada","Camisas" ,1390))
listaPrendasSuperiores.push(new Producto("Body","Bodies" ,1190))

listaPantalones.push(new Producto("Jeans Rectos","Jeans" ,3990))
listaPantalones.push(new Producto("Leggings cuero","Leggings" ,1990))

listaZapatos.push(new Producto("Zandalia con taco","Zandalias" ,4990))
listaZapatos.push(new Producto("Zapato","Zapatos" ,6990))
listaZapatos.push(new Producto("Zapato cuero","Zapatos" ,8990))

listaAccesorios.push(new Producto("Cinturon cuero","Cinturones" ,1190))
listaAccesorios.push(new Producto("Sombrero tipo pescador","Sombreros" ,890))



console.log(listaPrendasSuperiores);
console.log(listaPantalones);
console.log(listaZapatos);
console.log(listaAccesorios);


//concatenar lista de productos en una unica lista con todos los productos de las distintas listas
let listaProductosTotal = listaPrendasSuperiores.concat(listaPantalones).concat(listaZapatos).concat(listaAccesorios)

console.log(listaProductosTotal);
console.log(listaProductosTotal.length);


//Agregar productos a la lista mediante prompt
const agregarProductosALaLista = () => {
    let nombre = prompt("Nombre del producto");
    let categoria = prompt("Nombre de la categoria");
    let precio = Number(prompt("Precio del producto"));

    let producto = new Producto (nombre, categoria, precio)
    listaProductosTotal.push(producto)

}

agregarProductosALaLista()

// Ordenar por pecio, de menor a mayor
listaProductosTotal.sort((a,b) => {
    if (a.precio > b.precio ) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0
})

console.log(listaProductosTotal);


// Filtrar productos por categoria (ej Zapatos)
let search = prompt("Que categoria de productos estás buscando")
let buscadorCategoria = listaProductosTotal.filter(obj => obj.categoria === search)
console.log(buscadorCategoria);



/*********************************************************
 *   TEMAS VISTOS EN CLASE
 **********************************************************/



// // //Declaracion de lista --- con los [ ]   --- cada elemendo va separado por ,
// // let superMercado = ["pera", "manzana", "queso", "jamon", "cerveza"]

// // console.log(superMercado);

// // //Para agregar un elemento a la lista: (los agrega al final)
// // superMercado.push("leche","agua")

// // console.log(superMercado);

// // //Para agregar un elemento a la lista al principio:
// // superMercado.unshift("tomate","naranja")

// // console.log(superMercado);


// // // Para ver la longitud de la lista
// // console.log(superMercado.length);


// // // Para ver un elemento en particular de la lista (en este caso la posicion 2, tener en cuenta que arranca a contar desde el 0)
// // console.log(superMercado[2]);

// // let ferreteria = ["tornillos","madera"]

// // console.log(ferreteria);


// // // Para unir dos listas:
// // let listaDefinitiva = superMercado.concat(ferreteria)
// // console.log(listaDefinitiva);

// // //Para cortar una lista (te trae el elemento 2, 3 y 4 --- incluye el 2, excluye el 5):
// // let listaReducida = listaDefinitiva.slice(2,5)
// // console.log(listaReducida);


// // // Para seleccionar elementos de la lista, podemos cortar partes y despues crear una lista nueva concatenando las listas que cortamos.  listaDefinitiva.length= va hasta el final de la lista
// // let lista1 =  listaDefinitiva.slice(0,3)
// // let lista2 =  listaDefinitiva.slice(8,listaDefinitiva.length)
// // let lista3 = lista1.concat(lista2)
// // console.log(lista3);


// class Producto {

//     constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     }
// }

// let listaSupermercado = [];

// listaSupermercado.push(new Producto("Tornillo", 1300))
// listaSupermercado.push(new Producto("Pera", 200))
// listaSupermercado.push(new Producto("Banana", 130))
// listaSupermercado.push(new Producto("Jamon", 150))
// listaSupermercado.push(new Producto("Jamon", 150))
// listaSupermercado.push(new Producto("Jamon", 150))
// listaSupermercado.push(new Producto("Queso", 800))
// listaSupermercado.push(new Producto("Auto", 1300000))
// listaSupermercado.push(new Producto("Moto", 800000))

// const agregarProductosALaLista = () => {

//     let nombre = prompt("nombre del producto");
//     let precio = Number(prompt("precio del producto"));

//     let producto = new Producto(nombre,precio)
//     listaSupermercado.push(producto)

// }

// //ordenar por nombre/precio la lista:
// listaSupermercado.sort((a,b) => {
//     if (a.precio > b.precio ) {
//         return 1
//     }
//     if (a.precio < b.precio) {
//         return -1
//     }
//     return 0
// })



// console.log(listaSupermercado);


// /*************************************************************
//  *  METODOS PARA RECORRER UN ARRAY DE OBJETOS
//  ************************************************************/

// // // Con For
// // for (let i = 0; i<listaSupermercado.length; i++) {
// //     console.log(listaSupermercado[i])
// // }

// // // For of
// // for (const obj of listaSupermercado){
// //     console.log(obj);
// // }

// // let obje = {nombre:"tomate" , precio:200}

// // // For in
// // for (const prop in obje) {
// //     console.log(prop);
// // }


// // // foreach()

// // listaSupermercado.forEach(obj => {
// //     console.log(obj);
// //     console.log(obj.nombre);
// //     console.log(obj.precio);

// // })


// // Buscadores de JS

// // Find - me trae un objeto
// // let buscadorUnico = listaSupermercado.find(obj => obj.nombre == "Tornillo")
// // console.log(buscadorUnico);

// // Filter me trae una coleccion de objetos
// let search = prompt("Que queres buscar")
// let buscadorMultiple = listaSupermercado.filter(obj => obj.nombre === search)
// console.log(buscadorMultiple);

// let buscadorPorPrecio = listaSupermercado.filter(obj => obj.precio < 1500)
// console.log(buscadorPorPrecio);




