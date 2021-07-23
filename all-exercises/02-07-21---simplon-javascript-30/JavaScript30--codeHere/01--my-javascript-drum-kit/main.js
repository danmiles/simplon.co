// KeyDown Event

document.addEventListener('keydown', function (e) {

    let key = document.querySelectorAll ("div.key");  
    

    if (e.keyCode == 65) {
        key[0].classList.add ("playing");
        document.getElementById('a').play();                 
    } else if (e.keyCode == 83) {
        key[1].classList.add ("playing");
        document.getElementById('s').play(); 
    } else if (e.keyCode == 68) {
        key[2].classList.add ("playing");
        document.getElementById('d').play(); 
    } else if (e.keyCode == 70) {
        key[3].classList.add ("playing");
        document.getElementById('f').play(); 
    } else if (e.keyCode == 71) {
        key[4].classList.add ("playing");
        document.getElementById('g').play(); 
    } else if (e.keyCode == 72) {
        key[5].classList.add ("playing");
        document.getElementById('h').play(); 
    } else if (e.keyCode == 74) {
        key[6].classList.add ("playing");
        document.getElementById('j').play(); 
    } else if (e.keyCode == 75) {
        key[7].classList.add ("playing");
        document.getElementById('k').play(); 
    } else if (e.keyCode == 76) {
        key[8].classList.add ("playing");
        document.getElementById('l').play(); 
    }
   
});

// KeyUP Event
document.addEventListener('keyup', function (e) {

    let key = document.querySelectorAll ("div.key");    
   

    if (e.keyCode == 65) {
        key[0].classList.remove ("playing");                        
    } else if (e.keyCode == 83) {
        key[1].classList.remove ("playing"); 
    } else if (e.keyCode == 68) {
        key[2].classList.remove ("playing"); 
    } else if (e.keyCode == 70) {
        key[3].classList.remove ("playing"); 
    } else if (e.keyCode == 71) {
        key[4].classList.remove ("playing"); 
    } else if (e.keyCode == 72) {
        key[5].classList.remove ("playing"); 
    } else if (e.keyCode == 74) {
        key[6].classList.remove ("playing"); 
    } else if (e.keyCode == 75) {
        key[7].classList.remove ("playing"); 
    } else if (e.keyCode == 76) {
        key[8].classList.remove ("playing"); 
    } 
   
});

