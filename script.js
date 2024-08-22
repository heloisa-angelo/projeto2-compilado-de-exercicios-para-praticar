// // // // 1. Faça um Programa que motre a menagem "Olá mundo" na tela
alert('Olá mundo')

// // // // 2. Faça um Programa que peça um número e então mostre "O número informado foi [número]"
let num = prompt('Digite um número')

alert(`O número informado foi ${num}`)

// // // 3. Faça um Programa que peça dois números e imprima a soma.
let num1 = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite outro número: '))
let soma = num1 + num2
alert(`${num1} + ${num2} = ${soma}`)

// // // // 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let nota1 = parseInt(prompt('Digite sua nota do primeiro bimestre: '))
let nota2 = parseInt(prompt('Digite sua nota do segundo bimestre: '))
let nota3 = parseInt(prompt('Digite sua nota do terceiro bimestre: '))
let nota4 = parseInt(prompt('Digite sua nota do quarto bimestre: '))

let media = (nota1 + nota2 + nota3 + nota4) / 4
alert(`${media}`)

// // // 5. Faça um programa que converta metros para centímeros.
let metro = parseInt(prompt('Valor em metro'))
alert(`Valor em centimtro: ${metro / 100}`)  

// // 6. Faça um Programa que peça o raio de um círculo, calcule e motre sua área.
let raio = parseFloat(prompt('Digite o raio de um círuclo'))
alert(`A área é: ${3.14 * (raio * raio)}`)

// //7. Faça um Programa que clacule a área de um quadrado e em seguida mostre o dobro desa área para o usuário.
let lado = parseInt(prompt('Digite o lado do quadrado: '))
let area = lado * lado 
let dobroArea = area * 2

alert(`A área do quadrado é: ${area}
    E o dobro da área é: ${dobroArea}`)

// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let ganhoPorHora = parseInt(prompt('Digite quanto você ganha por hora: ')) 
let horasTrabalhadas = parseInt(prompt('Digite sua quantidade de horas trabalhadas no mês: '))
let salario = ganhoPorHora * horasTrabalhadas

alert(`Você receberá um total de R$${salario}.`)

// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9). 
let fahrentheit = parseFloat(prompt('Digite a temperatura em graus Fahrenheit:'))
let temperatura = (fahrentheit - 32 * 5 / 9)

alert(`A temperatura em graus Célcius é: ${temperatura}`)

// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
let celcius = parseInt(prompt('Digite a temperatura em graus Célcius: '))
let tempFahrenheit = (celcius * 1.8 + 32)

alert(`A temperatura em graus Fahrenheit é: ${tempFahrenheit}`)

// 11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:

// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.
let numInteiro1 = parseInt(prompt('Digite um número inteiro: '))
let numInteiro2 = parseInt(prompt('Digite outro número inteiro: '))
let numReal = parseInt(prompt('Agora digite um número real: '))

    alert(`O produto do dobro do pirmeiro número com o dobro do segundo: ${numInteiro1 * 2  + numInteiro2 / 2}
A soma do triplo do primeiro número com o terceiro é: ${3 * numInteiro1 + numReal} 
O terceiro número elevado ao cubo é: ${numReal * numReal * numReal} `)

// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = parseFloat(prompt('Digie sua altura: '))
let pesoIdeal = (72.7 * altura) - 58

alert(`Seu peso ideal é ${pesoIdeal}`)

// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7

let alturaH = parseFloat(prompt('Digite sua altura:  '))
let pesoHomem = (72.7 * alturaH) - 58
let pesoMulher = (62.1 * alturaH) - 44.7 

alert(`Seu peso ideal caso seja homem é: ${pesoHomem}
Seu peso ideal caso seja mulher é: ${pesoMulher}`)

// 14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
let pesoPeixe = parseInt(prompt('Digite a quantidade de quilos de peixe: '))
let excesso = (pesoPeixe - 50)
let multa = (excesso + 4)

alert(`A quantidade de quilos execedente é ${execesso} e a multa é de R$${multa}.`)

// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

// salário bruto.
// quanto pagou ao INSS.
// quando pagou para o sindicato.
// o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
// Salário Bruto : R$
// INSS (8%) : R$
// Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.

let salarioPorHora = parseInt(prompt('Digite quanto você ganha por hora '))
let horasPorMes = parseInt(prompt(`Digite quantas horas você trabalha por mês: `))
let salarioBruto = salarioPorHora * horasPorMes
let inss = salarioBruto * 8 / 100
let sindicato = salarioBruto * 5 /100
let salarioLiquido = salarioBruto - inss - sindicato
alert(`Seu salário bruto é ${salarioBruto} A quantia paga no INSS foi de ${inss} A quantia paga no sindicato foi de ${sindicato} O salário líquido é ${salarioLiquido}`)