let answer

function randomNumber(){
    answer = Math.floor((Math.random()*100)+1)
}

randomNumber()

let turn = 1

let triedNumbersArray = []

const info = document.getElementById("info")

const sendAnswer = document.getElementById("send-answer")

const triedNumbers = document.getElementById("triedNumbers")

const inputNumber = document.getElementById("input-number")

function newGame(info, inputNumber){
    const newGameBtn = document.createElement("button")
    newGameBtn.textContent = "Iniciar novo Jogo"
    newGameBtn.id = "btn-new-game"
    const main = document.getElementsByTagName("main")[0]
    main.appendChild(newGameBtn)
    inputNumber.style.opacity = ".5"
    sendAnswer.style = "opacity: .5; cursor: auto"
    newGameBtn.addEventListener("click", () => {
        turn = 1
        inputNumber.disabled = false
        sendAnswer.disabled = false;
        triedNumbersArray = []
        info.textContent = ""
        main.removeChild(newGameBtn)
        triedNumbers.innerHTML = ""
        randomNumber()
        inputNumber.focus()
        let html = document.getElementsByTagName('html')[0];
        html.setAttribute("style", "--main-color: #519bf0");
        inputNumber.style.opacity = "1"
        sendAnswer.style = "opacity: 1; cursor: pointer"
    })
}

function gameFunction(){
    const info = document.getElementById("info")
    let html = document.getElementsByTagName('html')[0];


        if(!inputNumber.value.length){
            alert("Error: Campo de input está vazio!!")
            return;
        }

        if(0 > Number(inputNumber.value) || 100 < Number(inputNumber.value)){
            alert("Error: o número está entre 0 e 100")
            inputNumber.value = ""
            inputNumber.focus()
            return;
        }

        if(answer === Number(inputNumber.value)){
            info.textContent = "Parabéns, Você acertou o número!"
            newGame(info, inputNumber)
            sendAnswer.disabled = true;
            inputNumber.disabled = true;
            html.setAttribute("style", "--main-color: #4de09b");
        }
    
        if(answer > Number(inputNumber.value)){
            info.textContent = "Você errou, número muito baixo!"
            turn++
            html.setAttribute("style", "--main-color: #f05151");
        }
    
        if(answer < Number(inputNumber.value)){
            info.textContent = "Você errou, número muito alto!"
            turn++
            html.setAttribute("style", "--main-color: #f05151");
        }

        if(turn > 10){
            info.textContent = `Você perdeu, o número correto era ${answer}. Tente novamente!`
            newGame(info, inputNumber)
            sendAnswer.disabled = true;
            inputNumber.disabled = true;
        }

    triedNumbersArray.push(Number(inputNumber.value))

    triedNumbers.innerHTML = triedNumbersArray
    inputNumber.value = ""
    inputNumber.focus()
}

sendAnswer.addEventListener("click", gameFunction)

document.addEventListener("keydown", e => {
    if(e.key === "Enter" && document.activeElement.id === "input-number"){
        gameFunction()
        return;
    }

    if(e.key === "Enter"){
        document.getElementById("btn-new-game").click()
    }
})

inputNumber.focus()

