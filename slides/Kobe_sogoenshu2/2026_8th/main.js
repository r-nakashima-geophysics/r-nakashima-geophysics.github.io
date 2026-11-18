Reveal.initialize({
    controlsLayout: "edges",
    hash: true,
    scrollActivationWidth: null,
    // width: 960,
    width: 1100,
    height: 700,
    margin: 0.2,

    slideNumber: (slide) => {
        return [
            Reveal.getIndices(slide).h,
            "/",
            Reveal.getHorizontalSlides(slide).length - 1,

            // Reveal.getIndices(slide).h + 1,
            // "/",
            // Reveal.getHorizontalSlides(slide).length,
        ];
    },

    plugins: [
        RevealHighlight,
        // RevealZoom
    ],
});

// タイトルリンク //
Reveal.on("ready", () => {
    const url =
        "https://beefplus.center.kobe-u.ac.jp/lms/course?idnumber=20263X0082001";
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

// ナビゲーション //
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
            false,
        );
        Reveal.addEventListener(
            `part${j}-sub`,
            () => {
                for (let i = startNumPart; i <= numPart; i++) {
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
            false,
        );
    }
});

// PDF 出力 //
Reveal.configure({ pdfMaxPagesPerSlide: 1, pdfSeparateFragments: false });
Reveal.on("pdf-ready", () => {
    const elementHeader = document.getElementById("info_header");
    const elementFooter = document.getElementById("info_footer");

    const elementsPdfPage = document.querySelectorAll(".pdf-page");
    for (const elementPdfPage of elementsPdfPage) {
        let cloneElementHeader = elementHeader.cloneNode(true);
        let cloneElementFooter = elementFooter.cloneNode(true);
        elementPdfPage.appendChild(cloneElementHeader);
        elementPdfPage.appendChild(cloneElementFooter);
        cloneElementHeader.style =
            "text-align: start; position: absolute; top: 0; zoom: 0.9;";
        cloneElementFooter.style =
            "text-align: start; position: absolute; bottom: 0; zoom: 0.9;";

        let elementSection = elementPdfPage.querySelector("section");
        elementSection.style.height = "100%";
        elementSection.style.top = "100px";

        let elementNav = cloneElementHeader.querySelector("#nav_slide");
        if (elementSection.dataset.state === "top-slide") {
            elementNav.style.display = "none";
        } else {
            elementNav.style.display = "block";
        }

        let elementsNavPart = elementNav.querySelectorAll(".nav_part");
        let numPart = elementsNavPart.length;
        let startNumPart = 1;
        let matchNumber = elementSection.dataset.state.match(/\d+/);
        let matchSub = elementSection.dataset.state.match(/-sub/);
        if (matchNumber) {
            let j = Number(matchNumber[0]);
            for (let i = startNumPart; i <= numPart; i++) {
                if (i < j) {
                    elementsNavPart[i - 1].className = "past";
                } else if (i === j) {
                    elementsNavPart[i - 1].className = "present";
                } else {
                    elementsNavPart[i - 1].className = "future";
                }
            }
            if (matchSub) {
                let elementNavPartSub = elementNav.querySelector(
                    `#nav_part${j}-sub`,
                );
                console.log(elementNav);
                elementNavPartSub.style.display = "block";
                elementNavPartSub.className = "present";
            }
        }

        const elementsContent = elementSection.children;
        for (const element of elementsContent) {
            element.style.zoom = "0.9";
        }
    }
});

// detail //
Reveal.on("ready", () => {
    let newElement;
    const elementsDetail = document.getElementsByClassName("detail");

    for (let i = 0; i < elementsDetail.length; i++) {
        newElement = document.createElement("i");
        elementsDetail[i].insertBefore(
            newElement,
            elementsDetail[i].firstChild,
        );
        elementsDetail[i].firstChild.classList.add(
            "fas",
            "fa-info-circle",
            "detail-icon",
        );
    }
});
