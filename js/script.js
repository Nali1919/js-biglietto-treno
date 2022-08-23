console.log('JS OK!');

const km = prompt('Quanti km vuoi percorrere?');
const kmAsNumber = parseInt(km);
console.log('km percorsi', kmAsNumber);


const età = prompt('Quanti anni hai');
const etàAsNumber = parseInt(età);
console.log('età', etàAsNumber);

const prezzo = 0.21 * kmAsNumber
const risposta = `Il prezzo è ${prezzo}`;

document.getElementById('mio_id').innerHTML= risposta;






