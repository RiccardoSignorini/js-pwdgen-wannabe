/* PASSWORD GENERATOR
    -CHIEDERE IL NOME ALL'UTENTE
    -CHIEDERE IL COGNOME ALL'UTENTE
    -CHIEDERE IL COLORE PREFERITO DELL'UTENTE
    -GENERARE UNA SCRITTA NOMECOGNOMECOLOREPREFERITO21
*/

// VARIABILI
let name = prompt(`Qual'è il tuo nome?`);

let surname = prompt(`Qual'è il tuo cognome?`);

let favcolor = prompt(`Qual'è il tuo colore preferito?`);

// LOGICA
document.writeln(`<p>Prova ad utilizzare questa (insicurissima) password:`+ ` ` + name + surname + favcolor + `21</p>`)