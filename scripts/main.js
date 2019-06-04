

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/Koala.jpg') {
      myImage.setAttribute ('src','image/Desert.jpg');
    } else {
      myImage.setAttribute ('src','image/Koala.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('你叫啥拉??.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '北爛臉無尾熊哥哥, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '北爛臉無尾熊哥哥, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}