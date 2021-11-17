let answer

function randomNumber(){
    answer = Math.floor((Math.random()*100)+1)
    alert(answer)
}

randomNumber()

let turn = 1

let triedNumbersArray = []

const info = document.getElementById("info")

function congratulations(){
    info.textContent = "Parabéns, Você acertou o número!"
}

const sendAnswer = document.getElementById("send-answer")

const triedNumbers = document.getElementById("triedNumbers")

function newGame(info, inputNumber){
    const newGameBtn = document.createElement("button")
    newGameBtn.textContent = "Iniciar novo Jogo"
    const main = document.getElementsByTagName("main")[0]
    main.appendChild(newGameBtn)
    newGameBtn.addEventListener("click", () => {
        turn = 1
        inputNumber.disabled = false
        sendAnswer.disabled = false;
        triedNumbersArray = []
        info.textContent = ""
        main.removeChild(newGameBtn)
        triedNumbers.innerHTML = ""
        randomNumber()
    })
}

sendAnswer.addEventListener("click", () => {

    const info = document.getElementById("info")

    const inputNumber = document.getElementById("input-number")

    triedNumbersArray.push(Number(inputNumber.value))

    if(answer === Number(inputNumber.value)){
        congratulations()
        newGame(info, inputNumber)
        sendAnswer.disabled = true;
        inputNumber.disabled = true;
    }
    triedNumbers.innerHTML = triedNumbersArray
    inputNumber.value = ""
})