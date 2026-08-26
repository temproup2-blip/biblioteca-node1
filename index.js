const { saudacao, formatarData } = require('./utils');
const config = require('./config');
console.log(saudacao('Professor'));
console.log(`Data de hoje: ${formatarData()}`);
console.log(`Rodando o projeto: ${config.nomeProjeto}`);
console.log(`Porta configurada: ${config.porta}`);
