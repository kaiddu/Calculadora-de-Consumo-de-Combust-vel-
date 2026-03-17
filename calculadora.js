let nome = prompt("Nome do motorista: ");
let tipo = Number(prompt("Tipo de combustível: (1 - Gasolina, 2 - Etanol, 3 - Diesel) "));
let distancia = Number(prompt("Distância percorrida em km: "));
let litros = Number(prompt("Litros abastecidos: "))

let consumoEsperado;

switch (tipo) {
case 1: 
    consumoEsperado = 12.0;
    break;
    case 2:
        consumoEsperado = 8.5;
        break;
        case 3:
            consumoEsperado = 15.0
            break;
            default:
    console.log("Combustível inválido");
    break;
            
            
}
            
            let consumoReal = distancia / litros;
            
            let avaliacao;
            
            switch (true) {
                
            case consumoReal >= consumoEsperado * 1.10:
                avaliacao = "Excelente --- acima do esperado"
                break;
                
                case consumoReal >= consumoEsperado * 0.90:
                    avaliacao = "Regular --- dentro do esperado"
                    break;
                    
                    case consumoReal >= consumoEsperado * 0.70:
                        avaliacao = "Ruim --- abaixo do esperado"
                        break;
                        
                        default:
                        avaliacao = "Crítico --- veículo requer manutenção"
                        console.log("consumoEsperado:", consumoEsperado);
            }
                        let status = 
                        (avaliacao.includes("Excelente") ||
                        avaliacao.includes("Regular"))
                        ? "LIBERADO PARA FROTA"
                        : "ENCAMINHADO PARA REVISAO";
                        
                        console.log("motorista:", nome);
                        console.log("consumo por km:",
                        consumoReal.toFixed(2))
                        console.log("avaliacao:", avaliacao)
                        console.log("status:", status)
                    
