import prompt from 'readline';
import util from 'util';
const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg?msg+'\n':''}`);




let dataHora = await read(); //2023-01-01 19:00:00
let fusoHorarioLocal =  Number(await read()); //-3 
let cidadeDestino = await read(); //Grécia, Atenas 
let fusoHorarioDestino = Number(await read()); //2 

let dataHoraLocal = new Date(dataHora);
dataHoraLocal.setHours(Number(dataHoraLocal.getHours()) + fusoHorarioLocal + fusoHorarioDestino - 3);
let dataHoraDestino = new Date(new Date(dataHora).toLocaleString('en-US', {timeZone: 'Europe/Athens'}));
console.log("Já é Ano Novo em " + cidadeDestino + "? " + (dataHoraDestino.getFullYear() == dataHoraLocal.getFullYear()));
