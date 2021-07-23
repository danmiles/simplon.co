let panelGallery = document.querySelectorAll('.panel');


function open() {    
    this.classList.toggle('open');
}

function active(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panelGallery.forEach(panel => panel.addEventListener('click', open));
panelGallery.forEach(panel => panel.addEventListener('transitionend', active));