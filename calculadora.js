const numero = document.querySelector("#outNumero")

const numeros = []
let resultado

const num = (valor)=>{

    numero.innerText += valor
    numeros.push(valor)
    console.log(numeros.join(" - "))
}
const operador = (ope) =>{
    numero.innerText += ope
    numeros.push(ope)
    console.log(numeros.join(" - "))
}

const resetar = () =>{

    numero.innerText =""
    numeros.splice(0,numeros.length)
}

const deletar = () =>{

    numero.innerText = numero.innerText.slice(0, -1)
}

const executar = ()=>{

    const [num1, oper, num2] = numeros

    switch (oper) {
        case "/":
            resultado = Number(num1) / Number(num2)
            numero.innerText =`${resultado}`
            break;
        case "X":
            resultado = Number(num1) * Number(num2)
            numero.innerText =`${resultado}`
            break;
        case "-":
            resultado = Number(num1) - Number(num2)
            numero.innerText =`${resultado}`
            break;
        case "+":
            resultado = Number(num1) + Number(num2)
            numero.innerText =`${resultado}`
            break;
    
        default:
            break;
    }
}