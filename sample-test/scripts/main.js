

let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/firefox-logo.jpg')
    {
        myImage.setAttribute('src','images/pig.jpg');
    }
    else
    {
        myImage.setAttribute('src','images/firefox-logo.jpg');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('请输入名字。');
    if(myName === '' || myName === null)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla酷毙了，' + myName;
    }

    
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了，' + storedName;
}

myButton.onclick = function() 
{
    setUserName();
}