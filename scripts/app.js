

// Create a function that will create a elements and add them to the DOM
// We will have an input field that will take in the users input and save it to an array
// then be able to display the array on the with creating a new element


let createElementBtn = document.getElementById("createElementBtn");
let elementHere = document.getElementById("elementHere");

let userField = document.getElementById("userField");
let displayList = document.getElementById("displayList");
let userInput;
let itemsArray = [];


userField.addEventListener("keypress", (e) => {
    if(event.key === 'Enter'){
        userInput = userField.value
        console.log(userInput);

        if(userInput){
            itemsArray.push(userInput)
        }
        console.log(itemsArray);

        let listItem = document.createElement('li');
        listItem.textContent = userInput;
        displayList.appendChild(listItem);

    }
});
















function createElement(){
    let h1Tag = document.createElement('h1');
    let pTag = document.createElement('p');
    h1Tag.textContent = 'Header Content';
    pTag.textContent = 'The content of the p tag';
    elementHere.appendChild(h1Tag);
    elementHere.appendChild(pTag);
}


createElementBtn.addEventListener("click", (event) => {
    createElement();
});
