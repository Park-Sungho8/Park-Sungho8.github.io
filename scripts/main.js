/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
alert("It's a test page") // alert: 경고창 팝업

document.querySelector('ul').onclick = function() {
    alert("Don't poke around")
}

*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mclaren.jpeg') {
        myImage.setAttribute('src', 'images/mcl35.jpeg');
    } else {
        myImage.setAttribute('src', 'images/mclaren.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello " + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Hello again! " + storedName;
}
myButton.onclick = function() {
    setUserName();
}