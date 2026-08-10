// calculadora.js Uma calculadora que funciona no terminal


// process.argv é um array que contém todos os argumentos passados para o script
// [0] = caminho do node, [1] = caminho do script, [2] em diante nossos argument
// slice(2) remove os dois primeiros e fica só com o que nos interessa
const args = process.argv.slice(2);


// Vamos ver o que o usuário digitou (para debug)
console.log('Argumentos recebidos:', args);

// Verificar se o usuário passou exatamente 3 argumentos (número, operação, número)
if (args.length !== 3) {
console.log('❌ Ops! Você precisa digitar exatamente 3 coisas:');
console.log('📖 Uso correto: node calculadora.js <número1> <operação> <número2>');
console.log('💡 Exemplo: node calculadora.js 10 + 5');
console.log('⚙️ Operações diponíveis: + - * /');
process.exit(1);
}
// Extrair os valores do array
// args[0] = primeiro número, args[1] = operação, args[2] = segundo número
const num1 = parseFloat(args[0]);
// parseFloat converte texto em número decimal
const operacao = args[1];
// a operação fica como texto mesmo
const num2 = parseFloat(args[2]);
// segundo número também vira decimal
// Verificar se os números são válidos
if (isNaN(num1) || isNaN(num2)) {
console.log('X Erro: Os valores devem ser números válidos!');
console.log(' Exemplo correto: node calculadora.js 10.5 + 3.2');
process.exit(1);
}

console.log('🔢 Calculando: ${num1} ${operacao} ${num2}');

// Variável para guardar o resultado
let resultado

//switch é como um "menu de opções" dependendo da operação, faz uma coisa diferente
switch (operacao) {
case '+':
resultado = num1 + num2;
console.log('+ Fazendo uma soma...');
break;

case '-':
resultado = num1 - num2;
console.log(' Fazendo uma subtração...');
break;

case '*':
resultado = num1 * num2;
console.log(' Fazendo uma multiplicação...');
break;

case'/':
// Cuidado especial:não pode dividir por zero!
if (num2 ===0) {
    console.log('❌ Erro: Não é possível dividir por zero!');
    console.log('🤓 Dica: Divisão por zero é indefinida na matemática. ');
    process.exit(1);
}
resultado = num1 / num2;
console.log('➗ Fazendo uma Divisão...');
break;


default:
    // Se a operação não for nenhuma das acima
    console.log(`❌ Erro: Operação '${operacao}'não é válida!`);
    console.log(`⚙️ Operações disponíveis: + - */`);
    process.exit(1);

// Exibir resultado final
console.log(''); // Linha em branco para organizar
console.log('🎉Resultado:');
console.log(`${num1} ${operacao} ${num2} = ${resultado}`);


//Se for divisão, mostrar também com mais casas decimais
if (operacao === '/' && resultado % 1!== 0) {
    console.log(`📊 Resultado detalhado: ${resultado.toFixed(4)}`);
}

// informações estras baseadas no resultado
if (resultado <0) {
    console.log('🧾 Nota: O resultado é negativo.');
} else if (resultado === 0) {
    console.log('🧾 Nota: O resultado é zero.');
} else if (resultado > 1000) {
    console.log('🧾 Nota: Resultado grande! 🚀');

}
}
console.log('');
console.log('✅Cálculo concluído com sucesso!');