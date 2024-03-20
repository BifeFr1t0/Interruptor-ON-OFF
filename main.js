
    let button=document.querySelector('#colorb')
    let circle=document.querySelector('#circle')
    let sound=''
    circle.addEventListener('click',function() {
        button.style.transition='linear 0.5s';
        circle.style.transition='all 0.75s';
        document.querySelector('h3').style.transition='all 0.6s';
        document.querySelector('#wallpaper').style.backgroundSize='cover'
        document.querySelector('#wallpaper').style.transition='all 0.5s'
        

        if (button.style.backgroundColor=='palegreen' || button.style.backgroundColor==''){
            button.style.backgroundColor='rgb(255, 80, 80)';
            circle.style.transform='translateX(400px)';
            document.querySelector('#off').style.color='rgb(255, 80, 80)';
            document.querySelector('#on').style.color='';
            document.querySelector('#wallpaper').style.backgroundImage='url(img/night.jpg)';
            

        }
        else if (button.style.backgroundColor=='rgb(255, 80, 80)'){
            button.style.backgroundColor='palegreen';
            circle.style.transform='translateX(0px)';
            document.querySelector('#off').style.color='';
            document.querySelector('#on').style.color='palegreen';
            document.querySelector('#wallpaper').style.backgroundImage='url(img/day.jpg)';
        }
    });