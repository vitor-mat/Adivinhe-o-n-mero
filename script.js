function randomNumber(){
    const answer = Math.floor((Math.random()*100)+1)
    return console.log(answer)
}

let turn = 1

randomNumber()

const triedNumbersArray = []

document.getElementById("send-answer").addEventListener("click", () => {
    triedNumbersArray.push(document.getElementById("input-number").value)
    document.getElementById("triedNumbers").innerHTML = triedNumbersArray
})