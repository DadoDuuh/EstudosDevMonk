import prompt from 'readline';
import util from 'util';
const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg?msg+'\n':''}`);

//2023-01-01T12:00:00-03:00
//2 tempo da viagem
//-5 fuso horário destino

let horaPartida = await read();
let tempoViagem = Number(await read());
let fusoHorario = Number(await read());

let chegada = new Date(horaPartida);
let calculo = chegada.getHours() + 3;
let teste = chegada.setHours(calculo + tempoViagem + fusoHorario - 3);
console.log(chegada.toISOString().replaceAll("/", "-").replace("T", " ").substr(0,19));
