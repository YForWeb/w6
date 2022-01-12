// Image switcher code
/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/MyImage2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}*/

// Personalized welcome message code
//
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//console.log(myHeading);

function setUserName() {
  let myName = prompt('名前を入力してください。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '今日は ' + myName + 'さん';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '今日は' + storedName +'さん';
}

myButton.onclick = function() {
  setUserName();
}
//
