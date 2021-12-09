window.onload = function () {

    createNewNumbers()

}




const createNewNumbers = function () {

    // Find the parent for the days (= month container)
    let numbersContainerNode = document.getElementById("number-container")

    // TODO: Get the current month, so we can know how many days we need
    // (just for now, we assume we are in December and we have 31 days)
    let bingoNumbers = 76

    // Within a loop, we create as many days as we need
    for (let numbers = 0; numbers <= bingoNumbers; numbers++) {

        // We create a new DIV element...
        let newNumbersNode = document.createElement("div") // <div></div>
        newNumbersNode.innerText = numbers // <div>1</div>
        newNumbersNode.classList.add("number") // <div class="day">1</div>

        numbersContainerNode.appendChild(newNumbersNode)



    }
}

const extractRandomNumber = function () {

    let randomNumber = Math.floor(Math.random() * 77)
    console.log(randomNumber) 

    let numbersNode = document.getElementById("number-container")

    for (i = 0; i < numbersNode; i++) {

        if (randomNumber.toString === numbersNode[i]) {

            numbersNode[i].add.classList("extractedNumber")
        }
    }


}



