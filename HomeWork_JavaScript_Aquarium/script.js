let count = prompt("Введите количество элементов");

function random(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let container = document.querySelector('.container');
let div = document.createDocumentFragment();
        for (let i = 1; i <= count; i++) {
            let text = document.createElement('div');
            text.textContent = i;
            text.className = "box";
            div.appendChild(text); 
        }
            container.appendChild(div);

let nav = document.querySelectorAll('p')[4];
if (count) {
    nav.innerHTML = count;
}

let second = 30;
if (count == 60) second = 60;

else if (count >= 70 && count <= 120) {second = 120;}

else if (count > 120) second = 300;
    
let min = setInterval(timer, 1000);
   function timer() {
let nav = document.querySelector('#timer');
nav.innerHTML = second--;
if (second == 0) {
    clearInterval(min);
    alert("Время вышло. Вы проиграли!!!");
}
}

let isLeft = true;
let isTop = true;

for (const box of document.querySelectorAll('.box')) {
    setInterval(()=> {

        let styles = getComputedStyle(box);
        let left = parseInt(styles.left) + random(0, 100);
        let top = parseInt(styles.top) + random(0, 100);
        let right = parseInt(styles.left) - random(0, 100);
        let bottom = parseInt(styles.top) - random(0, 100);

        if (isLeft && left <= window.innerWidth - 100) {
            box.style.setProperty('left', `${left}px`);
            box.style.transform = "rotate(0deg)";
        }

        else if (isTop && top <= window.innerHeight - 100) {
            box.style.setProperty('top', `${top}px`);
            box.style.transform = "rotate(45deg)";
        }

        else if (left > 150) {
            isLeft = false;
            box.style.setProperty('left', `${right}px`);
            box.style.transform = "rotate(180deg)";
        }

        else if (top > 150) {
            isTop = false;
            box.style.setProperty('top', `${bottom}px`);
            box.style.transform = "rotate(270deg)";
        }

        else {
            isLeft = true;
            isTop = true; 
        }

    }, 500);

    box.addEventListener('click', ()=> {
        event.target.remove();
        if (count >=0) {
            count--;
            nav.innerHTML = count; 
            if (count == 0) {
                clearInterval(min);
                alert("Вы выиграли!!!");
            }
        }
    });
 }
