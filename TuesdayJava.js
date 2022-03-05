var bodyLink;

var buttonPressed= false;
//setInterval
/*
var timer = setInterval(() =>{
    document.getElementById('elemtent0').innerHTML += '<h1>Hi</h1>';
}, 1000);
*/

//clearInterval
//setTimeout
//clearTimeout

function makeWebpage()
{
    bodyLink = document.getElementsByTagName('body');

    console.log(bodyLink);
    for(let i =0; i<10; i++)
    {
        var element = document.createElement('div');
        element.id="element" + i;
        element.setAttribute('class', 'card')
        element.addEventListener('mousedown', {
            handleEvent(event){
                setTimeout(clickOnDiv, 500);
            }
        });
        element.innerHTML = '<h1> Hi this is div number: ' + i + "</h1><br><button onclick='returRandomNumber()' id='button" + i + '  style="width:400px; height: 400px;"> Press Me</button>';

        document.getElementById('insertPlace').appendChild(element);
        console.log(element);
    }
}

function returRandomNumber()
{

        var random = Math.floor(Math.random() * 10) + 1;
        alert("random number is: " + random);
        buttonPressed = true;
}

function clickOnDiv()
{
    if (buttonPressed)
    {
        return;
    }
    else{
        alert('clicked not button');
        buttonPressed= false;
    }
}

makeWebpage();