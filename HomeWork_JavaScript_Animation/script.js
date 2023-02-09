let elem = prompt("Введите цвет фигуры(red, blue, green)");
let anim = prompt("Какую анимацию вы хотите запустить: \n1 - rotate; \n2 - scale; \n3 - color; \n4 - edge");
let speed = prompt("Введите скорость анимации в милисекундах");

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
            let id = setInterval(edge, speed);
            function edge(){
                let styles = getComputedStyle(elemRed);
                let left = 100 + parseInt(styles.left);
                let right = 100 + parseInt(styles.right);
                let top = 100 + parseInt(styles.top);
                let bottom = 100 + parseInt(styles.bottom);
                
                function rightEl(){
                   return elemRed.style.setProperty('right', `${right}px`);
                }
                
                    function topEl(){
                       return elemRed.style.setProperty('top', `${top}px`);
                    }
                    
                function leftEl(){
                    return elemRed.style.setProperty('left', `${left}px`);
                }

                function bottomEl(){
                    return elemRed.style.setProperty('bottom', `${bottom}px`);
                }
                
                rightEl();
                if (right >= window.innerWidth - 614){
                    clearInterval(id);
                }
                 //if (right >= window.innerWidth - 614) bottomEl();
                // if (bottom >= window.innerHeight) leftEl();
                // if (left >= window.innerWidth) topEl();
            }
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
        else{
            alert("Вы ввели неправильные значения!")
        }
            break;
            default:
                alert("Вы ввели неправильный цвет!"); 
                break;
};