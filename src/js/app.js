import { contactForm } from './contact-jquery.js'
import { initMap } from './map.js';
import { nav } from './nav.js';
import { carousel } from './carousel.js';
import { Slider } from './slider.js';

window.initMap = initMap;

document.addEventListener('DOMContentLoaded', function() {
    contactForm();
    nav();
    carousel();

    const cnf = {
        selektor : '.main-paralax',
        selektorSlide : '.main-paralax-slide',
        // prevSelector : '.main-paralax-prev',
        // nextSelector : '.main-paralax-next',
        animDelay : 8000
    }

    const slider = new Slider(cnf);
    slider.init();
})