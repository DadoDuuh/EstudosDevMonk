import prompt from 'readline';
import util from 'util';
const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg?msg+'\n':''}`);

function somar(num1, num2) {
  return num1 + num2;
}

console.log(somar(1, 2));