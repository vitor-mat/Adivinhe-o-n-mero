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
    })
}

sendAnswer.addEventListener("click", () => {

    const info = document.getElementById("info")



    triedNumbersArray.push(Number(inputNumber.value))

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
            var html = document.getElementsByTagName('html')[0];
            html.setAttribute("style", "--main-color: #4de09b");
        }
    
        if(answer > Number(inputNumber.value)){
            info.textContent = "Você errou, número muito baixo!"
            turn++
            var html = document.getElementsByTagName('html')[0];
            html.setAttribute("style", "--main-color: #f05151");
        }
    
        if(answer < Number(inputNumber.value)){
            info.textContent = "Você errou, número muito alto!"
            turn++
            var html = document.getElementsByTagName('html')[0];
            html.setAttribute("style", "--main-color: #f05151");
        }

        if(turn > 10){
            info.textContent = `Você perdeu, o número correto era ${answer}. Tente novamente!`
            newGame(info, inputNumber)
            sendAnswer.disabled = true;
            inputNumber.disabled = true;
        }


    triedNumbers.innerHTML = triedNumbersArray
    inputNumber.value = ""
    inputNumber.focus()
})

inputNumber.focus()
