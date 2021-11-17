let answer

function randomNumber(){
    answer = Math.floor((Math.random()*100)+1)
    alert(answer)
}

randomNumber()

let turn = 1

const triedNumbersArray = []

document.getElementById("send-answer").addEventListener("click", () => {
    const inputNumber = Number(document.getElementById("input-number").value)
    triedNumbersArray.push(inputNumber)
    if(answer === inputNumber){
        alert("acertou")
    }
    document.getElementById("triedNumbers").innerHTML = triedNumbersArray
})