

const km = prompt('Quanti km vuoi percorrere?');
const kmAsNumber = parseInt(km);
console.log('km percorsi', kmAsNumber);


const età = prompt('Quanti anni hai');
const etàAsNumber = parseInt(età);
console.log('età', etàAsNumber)

let costo = 0.21 * kmAsNumber

console.log(costo)
 document.getElementById('js').innerHTML= costo

if (etàAsNumber <= 18) {

    costo = costo - costo * 20 / 100
    console.log(costo)
    document.getElementById('js').innerHTML= costo

}
else if (etàAsNumber >= 65) {

    costo = costo - costo * 40 / 100
    console.log(costo)
    document.getElementById('js').innerHTML= costo
    
}







 






