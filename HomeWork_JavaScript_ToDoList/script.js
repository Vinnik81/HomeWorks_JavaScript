let array = [];

document.forms.toDoForm.addEventListener('submit', () => {
    event.preventDefault();

    
    let text = document.forms.toDoForm.title.value;
    let obj = {title: text, id: Date.now()};
    array.push(obj);
    drawItem(obj);
    localStorage.setItem('array', JSON.stringify(array));
    document.forms.toDoForm.reset();
});

function drawItem(obj) {
    let item = document.createElement('li');
    item.innerHTML = obj.title  + "<span>❌</span>" + ' <input id="date" type="date" value="">';
    document.getElementById('tasks').append(item);
    
}



document.querySelector('#tasks').addEventListener('click', () => {
    if (event.target.tagName == 'LI') {
        if (event.target.classList.contains('done')) {
            event.target.classList.remove('done');
        } else {
            event.target.classList.add('done');
        }
    } else if (event.target.tagName == 'SPAN') {
        event.target.parentElement.remove();
    }
});

let ul = document.getElementById('tasks');
let clear = document.getElementById('btnClear');


function clearList() {
    if (clear) {
        ul.innerHTML = "";
    }
    else {
        let item = document.createElement('li');
        item.innerHTML = document.forms.toDoForm.title.value + ' <input id="date" type="date" value="date">' + "<span>❌</span>";
        document.getElementById('tasks').append(item);
    }
    
    
}

clear.addEventListener("click", clearList, false);

document.addEventListener('DOMContentLoaded', () => {
let part = document.cookie.split(';')[0];
let style = part.split('=')[1]
console.log(style);
document.querySelector('body').style.backgroundColor = style;
document.querySelector('h1').style.backgroundColor = style;
document.querySelector('h1').style.color = style;
document.querySelector('button').style.backgroundColor = style;
document.querySelector('button').style.color = style;
document.querySelector('#btnClear').style.backgroundColor = style;
document.querySelector('#btnClear').style.color = style;
});

document
.querySelector('#btn1')
.addEventListener('click', () => {
document.cookie = "style = Style1;max-age=3600";
document.querySelector('body').style.backgroundColor = 'darkgray';
document.querySelector('h1').style.backgroundColor = 'gray';
document.querySelector('h1').style.color = 'black';
document.querySelector('button').style.backgroundColor = 'green';
document.querySelector('button').style.color = 'black';
document.querySelector('#btnClear').style.backgroundColor = 'red';
document.querySelector('#btnClear').style.color = 'black';
});

document
.querySelector('#btn2')
.addEventListener('click', () => {
document.cookie = "style = Style2;max-age=3600";
document.querySelector('body').style.backgroundColor = 'aqua';
document.querySelector('h1').style.backgroundColor = '#4fd77f';
document.querySelector('h1').style.color = 'darkblue';
document.querySelector('button').style.backgroundColor = '#4fd77f';
document.querySelector('button').style.color = 'darkblue';
document.querySelector('#btnClear').style.backgroundColor = '#cf222e';
document.querySelector('#btnClear').style.color = 'darkblue';
});

document
.querySelector('#btn3')
.addEventListener('click', () => {
document.cookie = "style = Style3;max-age=3600";
document.querySelector('body').style.backgroundColor = 'antiquewhite';
document.querySelector('h1').style.backgroundColor = '#dac5b0';
document.querySelector('h1').style.color = '#282929';
document.querySelector('button').style.backgroundColor = '#fed55f';
document.querySelector('button').style.color = '#282929';
document.querySelector('#btnClear').style.backgroundColor = 'orange';
document.querySelector('#btnClear').style.color = '#282929';
});

document.addEventListener('DOMContentLoaded', () => {
let style = localStorage.getItem('class');
console.log(style);
document.querySelector('body').classList.add(style);
let data = localStorage.getItem('array');

if (data) {
     array = JSON.parse(data);

    for (const item of array) {
        drawItem(item);
    }
}
});

document
.querySelector('#btn1')
.addEventListener('click', () => {
    localStorage.setItem('class', document.querySelector('body').classList.add('darkGrayTheme'));
    
});

document
.querySelector('#btn2')
.addEventListener('click', () => {
    localStorage.setItem('class', document.querySelector('body').classList.add('aquaTheme'));
    
// document.querySelector('h1').style.backgroundColor = '#4fd77f';
// document.querySelector('h1').style.color = 'darkblue';
// document.querySelector('button').style.backgroundColor = '#4fd77f';
// document.querySelector('button').style.color = 'darkblue';
// document.querySelector('#btnClear').style.backgroundColor = '#cf222e';
// document.querySelector('#btnClear').style.color = 'darkblue';
});

document
.querySelector('#btn3')
.addEventListener('click', () => {
    localStorage.setItem('class', document.querySelector('body').classList.add('antiquewhiteTheme'));
    
// document.querySelector('h1').style.backgroundColor = '#dac5b0';
// document.querySelector('h1').style.color = '#282929';
// document.querySelector('button').style.backgroundColor = '#fed55f';
// document.querySelector('button').style.color = '#282929';
// document.querySelector('#btnClear').style.backgroundColor = 'orange';
// document.querySelector('#btnClear').style.color = '#282929';
});
