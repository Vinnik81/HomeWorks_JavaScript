let elem = prompt("Введите цвет фигуры(red, blue, green)");
let anim = prompt("Какую анимацию вы хотите запустить: \n1 - rotate; \n2 - scale; \n3 - color; \n4 - edge");
let speed = prompt("Введите скорость анимации в милисекундах");
let isLeft = true;
let isTop = true;

function random(){
    return Math.floor(Math.random()*255);
}
function randomRGB(){
    return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';

}

switch(elem)
{
    case 'red':
        let elemRed = document.querySelector(".red");
        if (anim == 1)
        {
            let deg = 0;
            let id = setInterval(rotate, speed);
            function rotate(){
                elemRed.style.transform = "rotate("+deg+"deg)";
                deg = (deg == 360)?0:deg+1;
            }
            function stop(){
                elemRed.style.transform = "rotate("+0+"deg)";
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 2)
        {
            let id = setInterval(scale, speed);
            function scale(){
                elemRed.style.width = '500px'; 
                elemRed.style.height = '500px';
            }
            function stop(){
                elemRed.style.width = '150px'; 
                elemRed.style.height = '150px';
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 3)
        {
            let id = setInterval(color, speed);
            function color(){
                let rgb = randomRGB();
                elemRed.style.backgroundColor = rgb;
            }
            function stop(){
                elemRed.style.backgroundColor = 'red';
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 4)
        {
            elemRed.style.setProperty('position', 'absolute');
            let id = setInterval(edge, speed);

            function edge() {
            let box = getComputedStyle(elemRed);
    
            if (isLeft && parseInt(box.left) < parseInt(window.innerWidth) - 220) {
                let left = parseInt(box.left) + 100;
                elemRed.style.setProperty('left', `${left}px`);
            }

            else if (isTop && parseInt(box.top) < parseInt(window.innerHeight) - 220) {
                let top = parseInt(box.top) + 100;
                elemRed.style.setProperty('top', `${top}px`);
            }

            else if (parseInt(box.left) > 90) {
                isLeft = false;
                let right = parseInt(box.left) - 100;
                elemRed.style.setProperty('left', `${right}px`);
            }

            else if (parseInt(box.top) > 90) {
                isTop = false;
                let bottom = parseInt(box.top) - 100;
                elemRed.style.setProperty('top', `${bottom}px`);
            }

            else {
                isLeft = true;
                isTop = true;
                }
            }
       
            function stop() {
                clearInterval(id);
                elemRed.style.left = '0px';
                elemRed.style.top = '0px';
                elemRed.style.position = 'relative';
            }

            setTimeout(stop, 15 * 1000);
        }

        else{
            alert("Вы ввели неправильные значения!")
        }
        break;
        case 'blue':
            let elemBlue = document.querySelector(".blue");
            if (anim == 1)
            {
                let deg = 0;
                let id = setInterval(rotate, speed);
                function rotate(){
                    elemBlue.style.transform = "rotate("+deg+"deg)";
                    deg = (deg == 360)?0:deg+1;
                }
                function stop(){
                    elemBlue.style.transform = "rotate("+0+"deg)";
                    clearInterval(id);
                }
                setTimeout(stop, 5 * 1000);
            }

            else if (anim == 2)
        {
            let id = setInterval(scale, speed);
            function scale(){
                elemBlue.style.width = '500px'; 
                elemBlue.style.height = '500px';
            }
            function stop(){
                elemBlue.style.width = '150px'; 
                elemBlue.style.height = '150px';
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 3)
        {
            let id = setInterval(color, speed);
            function color(){
                let rgb = randomRGB();
                elemBlue.style.backgroundColor = rgb;
            }
            function stop(){
                elemBlue.style.backgroundColor = 'blue';
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 4)
        {
            elemBlue.style.setProperty('position', 'absolute');
            let id = setInterval(edge, speed);

            function edge() {
            let box = getComputedStyle(elemBlue);
    
            if (isLeft && parseInt(box.left) < parseInt(window.innerWidth) - 220) {
                let left = parseInt(box.left) + 100;
                elemBlue.style.setProperty('left', `${left}px`);
            }

            else if (isTop && parseInt(box.top) < parseInt(window.innerHeight) - 200) {
                let top = parseInt(box.top) + 100;
                elemBlue.style.setProperty('top', `${top}px`);
            }

            else if (parseInt(box.left) > 90) {
                isLeft = false;
                let right = parseInt(box.left) - 100;
                elemBlue.style.setProperty('left', `${right}px`);
            }

            else if (parseInt(box.top) > 80) {
                isTop = false;
                let bottom = parseInt(box.top) - 100;
                elemBlue.style.setProperty('top', `${bottom}px`);
            }

            else {
                isLeft = true;
                isTop = true;
                }
            }
       
            function stop() {
                clearInterval(id);
                elemBlue.style.left = '0px';
                elemBlue.style.top = '0px';
                elemBlue.style.position = 'relative';
            }

            setTimeout(stop, 15 * 1000);
        }

        else{
            alert("Вы ввели неправильные значения!")
        }
            break;
            case 'green':
                let elemGreen = document.querySelector(".green");
                if (anim == 1)
            {
                let deg = 0;
                let id = setInterval(rotate, speed);
                function rotate(){
                    elemGreen.style.transform = "rotate("+deg+"deg)";
                    deg = (deg == 360)?0:deg+1;
                }
                function stop(){
                    elemGreen.style.transform = "rotate("+0+"deg)";
                    clearInterval(id);
                }
                setTimeout(stop, 5 * 1000);
            }

            else if (anim == 2)
        {
            let id = setInterval(scale, speed);
            function scale(){
                elemGreen.style.width = '500px'; 
                elemGreen.style.height = '500px';
            }
            function stop(){
                elemGreen.style.width = '150px'; 
                elemGreen.style.height = '150px';
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 3)
        {
            let id = setInterval(color, speed);
            function color(){
                let rgb = randomRGB();
                elemGreen.style.backgroundColor = rgb;
            }
            function stop(){
                elemGreen.style.backgroundColor = 'green';
                clearInterval(id);
            }
            setTimeout(stop, 5 * 1000);
        }

        else if (anim == 4)
        {
            elemGreen.style.setProperty('position', 'absolute');
            let id = setInterval(edge, speed);

            function edge() {
            let box = getComputedStyle(elemGreen);
    
            if (isLeft && parseInt(box.left) < parseInt(window.innerWidth) - 220) {
                let left = parseInt(box.left) + 100;
                elemGreen.style.setProperty('left', `${left}px`);
            }

            else if (isTop && parseInt(box.top) < parseInt(window.innerHeight) - 220) {
                let top = parseInt(box.top) + 100;
                elemGreen.style.setProperty('top', `${top}px`);
            }

            else if (parseInt(box.left) > 90) {
                isLeft = false;
                let right = parseInt(box.left) - 100;
                elemGreen.style.setProperty('left', `${right}px`);
            }

            else if (parseInt(box.top) > 80) {
                isTop = false;
                let bottom = parseInt(box.top) - 100;
                elemGreen.style.setProperty('top', `${bottom}px`);
            }

            else {
                isLeft = true;
                isTop = true;
                }
            }
       
            function stop() {
                clearInterval(id);
                elemGreen.style.left = '0px';
                elemGreen.style.top = '0px';
                elemGreen.style.position = 'relative';
            }

            setTimeout(stop, 15 * 1000);
        }

        else{
            alert("Вы ввели неправильные значения!")
        }
            break;
            default:
                alert("Вы ввели неправильный цвет!"); 
                break;
};