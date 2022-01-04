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
    
    cardCenter.innerHTML = "<div class=card-container></div>"
}
}
}
const createNewCardNumbers = function () {
    
    let numbersContainerNode = document.getElementsByClassName("card-container")

        for(let i = 0; i < 24; i++){
            let bingoNumbers = Math.floor(Math.random() * 77)
        let newNumbersNode = document.createElement("div") 
        newNumbersNode.innerText = bingoNumbers.toString()
        newNumbersNode.classList.add("number") 

        numbersContainerNode[0].appendChild(newNumbersNode)
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



