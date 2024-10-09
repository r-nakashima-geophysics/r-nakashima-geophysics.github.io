Reveal.on("ready", () => {
    const url = "";
    const target = "_blank";
    const textLength = 45;

    let ldots = "";
    const elementTitle = document.getElementById("presentation_title");
    let title = elementTitle.firstElementChild.textContent;
    elementTitle.firstElementChild.textContent = "";
    title = title.replace(/\n/g, "").replace(/\s{2,}/g, " ");
    if (title.length > textLength) {
        title = title.slice(0, textLength);
        ldots = " ...";
    }

    const anchor = document.createElement("a");
    elementTitle.firstElementChild.prepend(anchor);
    anchor.href = url;
    anchor.target = target;
    anchor.textContent = title + ldots;
});

Reveal.configure({ pdfSeparateFragments: false });

// ======================================== //
// ナビゲーション //
// ======================================== //

Reveal.on("ready", () => {
    const elementsNavPart = document.getElementsByClassName("nav_part");
    const numPart = elementsNavPart.length;
    const elementsPart = Array(numPart);
    const elementsPartSub = Array(numPart);
    const startNumPart = 1;
    for (let i = startNumPart; i <= numPart; i++) {
        elementsPart[i] = document.getElementById("nav_part" + i);
        elementsPartSub[i] = document.getElementById("nav_part" + i + "-sub");
    }

    for (let j = startNumPart; j <= numPart; j++) {
        Reveal.addEventListener(
            `part${j}`,
            () => {
                for (let i = startNumPart; i <= numPart; i++) {
                    if (i < j) {
                        elementsPart[i].className = "past";
                    } else if (i === j) {
                        elementsPart[i].className = "present";
                    } else {
                        elementsPart[i].className = "future";
                    }

                    elementsPartSub[i].className = "sub-slide";
                }
            },
            false
        );
        Reveal.addEventListener(
            `part${j}-sub`,
            () => {
                for (var i = startNumPart; i <= numPart; i++) {
                    if (i < j) {
                        elementsPart[i].className = "past";
                    } else if (i === j) {
                        elementsPart[i].className = "present";
                    } else {
                        elementsPart[i].className = "future";
                    }

                    if (i === j) {
                        elementsPartSub[i].className = "present show-sub";
                    } else {
                        elementsPartSub[i].className = "sub-slide";
                    }
                }
            },
            false
        );
    }
});

// ======================================== //
// detail //
// ======================================== //

Reveal.on("ready", () => {
    var newElement;
    const elementsDetail = document.getElementsByClassName("detail");

    for (let i = 0; i <= elementsDetail.length; i++) {
        newElement = document.createElement("i");
        elementsDetail[i].insertBefore(
            newElement,
            elementsDetail[i].firstChild
        );
        elementsDetail[i].firstChild.classList.add(
            "fas",
            "fa-info-circle",
            "detail-icon"
        );
    }
});
