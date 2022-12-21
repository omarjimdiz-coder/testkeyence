'use strict';

const textInput = document.getElementById("lenguaje");
const lista = document.querySelector(".lista");

const elements = JSON.parse(window.localStorage.getItem('elements'));

const listArray = [];

function getElements(){

    if(elements){
        elements.forEach(element => {
    
            const li = document.createElement("li");
            const buttonCreated = document.createElement("button");
    
            li.classList.add("list-group-item");
            buttonCreated.innerHTML = "&#10005;";
            buttonCreated.classList.add("cancel");
            const liInList = lista.appendChild(li);
    
            liInList.append(element);
            liInList.appendChild(buttonCreated);
    
            listArray.push(element);
        });
    }
} 

getElements();

textInput.addEventListener("keyup", (e) => {
    e.preventDefault();

    const li = document.createElement("li");
    const buttonCreated = document.createElement("button");

    if(textInput.value === ''){
        alert("Necesitas agregar un elemento");
        return;
    }

    if(e.key === "Enter"){
        li.classList.add("list-group-item");
        buttonCreated.innerHTML = "&#10005;";
        buttonCreated.classList.add("cancel");
        const liInList = lista.appendChild(li);
        liInList.append(textInput.value);
        liInList.appendChild(buttonCreated);

        detectNewElement(textInput.value);
        
        textInput.value = '';

        return;
    }
    
});

const detectNewElement = (valueInput) => {
    listArray.push(valueInput);
    localStorage.setItem('elements', JSON.stringify(listArray));
} 


lista.addEventListener('click', (e) => {
    const item = e.target;

    if(item.classList[0] === "cancel"){
        const listaComplete = item.parentElement;
        listaComplete.remove();
        
        for (let i = 0; i < listArray.length; i++) {
            if ( listArray[i] === listaComplete.textContent.slice(0, -1)) { 
                listArray.splice(i, 1); 
                localStorage.setItem("elements", JSON.stringify(listArray));
            }
            
        }
                
    }

});





