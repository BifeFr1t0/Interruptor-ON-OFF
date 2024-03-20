let button=document.querySelector('#colorb')
let circle=document.querySelector('#circle')
let ligado = false

circle.addEventListener('click', function() {
        ligado = !ligado

        if (ligado) {
            button.style.backgroundColor='palegreen';
            circle.style.transform='translateX(0px)';
            document.querySelector('#off').style.color='';
            document.querySelector('#on').style.color='palegreen';
            document.querySelector('#wallpaper').style.backgroundImage='url(img/day.jpg)';
        }
        else{
            button.style.backgroundColor='rgb(255, 80, 80)';
            circle.style.transform='translateX(400px)';
            document.querySelector('#off').style.color='rgb(255, 80, 80)';
            document.querySelector('#on').style.color='';
            document.querySelector('#wallpaper').style.backgroundImage='url(img/night.jpg)';
        }
    }
)