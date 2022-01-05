window.onload = function () {

    createNewNumbers()

}




const createNewNumbers = function () {

    let numbersContainerNode = document.getElementById("number-container")

    let bingoNumbers = 76

    
    for (let numbers = 0; numbers <= bingoNumbers; numbers++) {

        
        let newNumbersNode = document.createElement("div") 
        newNumbersNode.innerText = numbers 
        newNumbersNode.classList.add("number") 

        numbersContainerNode.appendChild(newNumbersNode)

    }
}

const createCardCont = function () {
let cardNumber = document.getElementById("card-number").value
let cardCenter = document.getElementById("last")
if (parseInt(cardNumber)>0){
    for(let i=0; i < parseInt(cardNumber); i++){
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card-container")
    cardCenter.appendChild(cardDiv)
}
}
}
const createNewCardNumbers = function () {
    
    let numbersContainerNode = document.getElementsByClassName("card-container")
for (let i=0; i < numbersContainerNode.length; i++) {
        for(let j = 0; j < 24; j++){
            let bingoNumbers = Math.floor(Math.random() * 77)
        let newNumbersNode = document.createElement("div") 
        newNumbersNode.innerText = bingoNumbers.toString()
        newNumbersNode.classList.add("number") 
        numbersContainerNode[i].appendChild(newNumbersNode)
        }
    }
    }

const extractRandomNumber = function () {

    let randomNumber = Math.floor(Math.random() * 77)
    console.log(randomNumber) 

    let numbersNode = document.querySelectorAll(".number")

    for (i = 0; i < numbersNode.length; i++) {

        if (randomNumber.toString() === numbersNode[i].textContent) {

            numbersNode[i].classList.add("extractedNumber")
        }
    }


}



