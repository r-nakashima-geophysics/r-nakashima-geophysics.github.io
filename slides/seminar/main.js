//const elementTitle = document.getElementById('presentation_title');
//let title = elementTitle.firstElementChild.textContent
//title = title.slice(0,32);
//elementTitle.firstElementChild.innerHTML = '<a href="#" target="_blank">' + title + " ...</a>"

// ======================================== //
// トップスライドはナビゲーションを非表示 //
// ======================================== //

let elementNav = document.getElementById('nav_slide');
let elementSlideNumber = document.getElementsByClassName('slide-number');
Reveal.addEventListener( 'top-slide', function() {
    elementNav.className = 'top-slide';
    elementSlideNumber.className = 'top-slide';
}, false );

// ======================================== //
// ナビゲーション //
// ======================================== //

const numPart = 10;
const elementsPart = Array(numPart);
const elementsPartSub = Array(numPart);
for (let i = 1; i <= numPart; i++) {
    elementsPart[i] = document.getElementById('nav_part'+ i);
    elementsPartSub[i] = document.getElementById('nav_part'+ i +'-sub');
};
for (let j = 1; j <= numPart; j++) {
    Reveal.addEventListener( `part${j}`, function() {
        for (let i = 1; i <= numPart; i++) {
            if (i < j) {
                elementsPart[i].className = 'past';
            } else if (i === j) {
                elementsPart[i].className = 'here';
            } else {
                elementsPart[i].className = 'future';
            };

            elementsPartSub[i].className = 'sub-slide';
        }
    }, false );
    Reveal.addEventListener( `part${j}-sub`, function() {
        for (var i = 1; i <= numPart; i++) {
            if (i < j) {
                elementsPart[i].className = 'past';
            } else if (i === j) {
                elementsPart[i].className = 'here';
            } else {
                elementsPart[i].className = 'future';
            };

            if (i === j) {
                elementsPartSub[i].className = 'here show-sub';
            } else {
                elementsPartSub[i].className = 'sub-slide';
            };
        };
    }, false );
};
