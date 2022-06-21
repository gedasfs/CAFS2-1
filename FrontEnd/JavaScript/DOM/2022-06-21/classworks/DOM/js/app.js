// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).
document.querySelector('[data-bs-toggle="collapse"]')?.addEventListener('click', function(event) {
    const someBlock = document.querySelector(event.srcElement?.closest('button').getAttribute('data-bs-target'));

    if (someBlock) {
        someBlock.style.display = someBlock.style.display == 'block' ? 'none' : 'block';
    }
});

// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;

let carouselItem = document.querySelector('#carousel .carousel-item');

// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
setInterval(function() {
    // console.log((new Date).getSeconds());

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    carouselItem.classList.remove('active');

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
    carouselItem = carouselItem.nextElementSibling ? carouselItem.nextElementSibling : document.querySelector('#carousel .carousel-item');
    carouselItem.classList.add('active');
}, 1000 * 2);

const time1 = document.querySelector('#time-1');
let time1IntervalId = null;

if (time1) {
    function setTime1() {
        if (time1) {
            const now = new Date;

            time1.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        }
    }

    setTime1();
    // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    time1IntervalId = setInterval(setTime1, 1000);
}

// clearInterval(time1IntervalId);

const time2 = document.querySelector('#time-2');
let time2Run = true;

function setTime2() {
    if (!time2Run) {
        return;
    }

    const now = new Date;

    time2.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    setTimeout(setTime2, 1000);
}

setTime2();

// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai

const alertDiv = document.querySelector('#alert');

document.querySelector('#submit')?.addEventListener('click', function() {
    // Validation
    if (alertDiv) {
        alertDiv.style.display = 'block';

        setTimeout(function() {
            alertDiv.style.display = 'none';
        }, 1000 * 3);
    }
});