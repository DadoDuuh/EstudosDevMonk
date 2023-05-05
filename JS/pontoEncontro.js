import prompt from 'readline';
import util from 'util';
const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg?msg+'\n':''}`);



let horarioEncontro = new Date(await read()); //2023-01-01T10:00:00Z
let tempoPessoa1 = await read();              //-3 
let fhPessoa1 = await read();                 //1 
let tempoPessoa2 = await read();              //-2
let fhPessoa2 = await read();                 //2

let calcPessoa1 = (horarioEncontro.getHours() + 3) - (fhPessoa1 - (tempoPessoa1));
let saidaPessoa1 = new Date(horarioEncontro);
saidaPessoa1.setHours(calcPessoa1 - 3);

let calcPessoa2 = (horarioEncontro.getHours() + 3) - (fhPessoa2 - (tempoPessoa2));
let saidaPessoa2 = new Date(horarioEncontro);
saidaPessoa2.setHours(calcPessoa2 - 3);

console.log("A primeira pessoa deve sair em " + saidaPessoa1.toISOString().replace("T", " ").substr(0, 19));
console.log("A segunda pessoa deve sair em " + saidaPessoa2.toISOString().replace("T", " ").substr(0, 19));
