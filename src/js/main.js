const fecha = new Date()
console.log(fecha)

const pabloBD  = new Date(2003,8,14)
console.log(pabloBD)

const pabloBDstring  = new Date("09/014/2003")
console.log(pabloBDstring)

const dia = fecha.getDate()
console.log(dia)

const mes = fecha.getMonth() + 1
console.log(mes)

const anio = fecha.getFullYear()
console.log(anio)

const year = fecha.getYear()
console.log(year)

const day = fecha.getDay()
console.log(day)

const hora = fecha.getHours()
console.log(hora)

const minutos = fecha.getMinutes()
console.log(minutos)

const segundos = fecha.getSeconds()
console.log(segundos)

const milisegundos = fecha.getMilliseconds()
console.log(milisegundos)

const fechaUsuario = new  Date()

// const usuario = prompt("Ingrese una fecha :"  , "MM/DD/YY")
// fechaUsuario = new Date(usuario)
// console.log(fechaUsuario)

console.log(`El dia ${dia} y mes ${mes}`)


let diaSumar = fecha.setDate(fecha.getDate() + 5)

console.log(new Date(diaSumar))

console.log(fecha)

const diasPrestamo = parseInt(prompt("ingrese la cantidad de dias del pres"))

const fechaDevolucion = new Date()

fechaDevolucion.setDate(fecha.getDate() + diasPrestamo)


let fechaCum =  prompt("Ingresa la fecha de nacimiento de la persona")

function notiCum(fecha) {
    
}