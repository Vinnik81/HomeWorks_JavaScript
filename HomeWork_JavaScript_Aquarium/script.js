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

let nav = document.querySelectorAll('p')[2];

if (count) {
    nav.innerText = count;
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
        }

        else if (isTop && top <= window.innerHeight - 100) {
            box.style.setProperty('top', `${top}px`);
        }
        
        else if (left > 150) {
            isLeft = false;
            box.style.setProperty('left', `${right}px`);
        }

        else if (top > 150) {
            isTop = false;
            box.style.setProperty('top', `${bottom}px`);
        }

        else {
            isLeft = true;
            isTop = true;
        }

        box.addEventListener('click', ()=> {
            event.target.remove();
        });
        

    }, 500);
 }