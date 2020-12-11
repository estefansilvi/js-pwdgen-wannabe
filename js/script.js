var nome= prompt('ciao come ti chiami?');
console.log('la persona si chiama:' + nome);

var outputContainer = document.getElementById('output');
outputContainer.innerText = 'ciao ' + nome;

var cognome= prompt('qual\è il tuo cognome?');
console.log('il suo cognome è:' + cognome);

var outputContainer = document.getElementById('output');
outputContainer.innerText = 'ciao ' + nome + cognome;

var colore= prompt("qual'è il tuo colore preferito?")
console.log('il suo colore preferito è:' + colore);

var outputContainer = document.getElementById('output');
outputContainer.innerText = 'ciao ' + nome + cognome + colore;

var anno = new Date('december 11, 20').getFullYear()

var outputContainer = document.getElementById('output');
outputContainer.innerText = 'ciao ' + nome + cognome + colore + anno;
