let answer

function randomNumber(){
    answer = Math.floor((Math.random()*100)+1)
    alert(answer)
}

randomNumber()

let turn = 1

const triedNumbersArray = []


function congratulations(info){
    const p = document.createElement("p")
    p.textContent = "Parabéns, Você acertou o número!"
    info.appendChild(p)
}

const sendAnswer = document.getElementById("send-answer")

sendAnswer.addEventListener("click", () => {

    const info = document.getElementById("info")

    const inputNumber = document.getElementById("input-number")

    triedNumbersArray.push(Number(inputNumber.value))

    if(answer === Number(inputNumber.value)){
        congratulations(info)
        sendAnswer.disabled = true;
        inputNumber.disabled = true;
    }
    document.getElementById("triedNumbers").innerHTML = triedNumbersArray
})