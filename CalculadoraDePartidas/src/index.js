//Função para calcular o nível baseado na quantidade de vitórias
function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

//Função principal para calcular saldo e nível
function calcularSaldo(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; //Cálculo do saldo
    const nivel = calcularNivel(vitorias); //Determina o nível com base nas vitórias
    return { saldoVitorias, nivel }; //Retorna o saldo e o nível
}

//Exemplo de uso:
const vitorias = 55; 
const derrotas = 30;

const resultado = calcularSaldo(vitorias, derrotas); //Calcula o saldo e nível
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`); //Exibe a mensagem
