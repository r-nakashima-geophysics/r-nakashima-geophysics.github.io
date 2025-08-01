// 共通 header //
window.addEventListener("DOMContentLoaded", () => {
    const elementFragment = new DocumentFragment();

    let elementH1 = document.createElement("h1");
    elementH1.textContent = "Ryosuke Nakashima (中島 涼輔) 's Home Page";
    elementFragment.appendChild(elementH1);

    const elementNav = document.createElement("nav");
    elementFragment.appendChild(elementNav);

    const elementParagraph = document.createElement("p");
    const arrayNav = [
        {
            id: "nav_home",
            href: "./index.html",
            icon: "fa-solid fa-house-chimney",
            text: "Home",
        },
        {
            id: "nav_research",
            href: "./research.html",
            icon: "fas fa-flask",
            text: "Research",
        },
        {
            id: "nav_publication",
            href: "./publication.html",
            icon: "fa-regular fa-file-lines",
            text: "Publications",
        },
        {
            id: "nav_presentation",
            href: "./presentation.html",
            icon: "fas fa-chalkboard-teacher",
            text: "Presentations",
        },
    ];
    for (const item of arrayNav) {
        const elementAnchor = document.createElement("a");
        elementAnchor.setAttribute("id", item.id);
        elementAnchor.setAttribute("href", item.href);

        const elementIcon = document.createElement("i");
        elementIcon.className = item.icon;
        elementAnchor.appendChild(elementIcon);

        const elementSpan = document.createElement("span");
        elementSpan.className = "link-text";
        elementSpan.textContent = item.text;
        elementAnchor.appendChild(elementSpan);

        elementParagraph.appendChild(elementAnchor);

        const elementBreak = document.createElement("br");
        elementParagraph.appendChild(elementBreak);
    }
    elementNav.appendChild(elementParagraph);

    const elementText = document.createTextNode(" ");
    elementParagraph.firstChild.after(elementText);

    const elementAnchor = document.createElement("a");
    elementAnchor.setAttribute("id", "nav_private");
    elementAnchor.setAttribute("href", "./private.html");
    elementAnchor.textContent = ".";
    elementAnchor.className = "hidden-link";
    elementText.after(elementAnchor);

    const elementHeader = document.querySelectorAll("header");
    elementHeader[0].appendChild(elementFragment);
});

// 共通 footer  //
window.addEventListener("DOMContentLoaded", () => {
    const elementFragment = new DocumentFragment();

    const elementParagraph = document.createElement("p");
    elementFragment.appendChild(elementParagraph);

    const elementSmall = document.createElement("small");
    elementParagraph.appendChild(elementSmall);

    const elementIcon = document.createElement("i");
    elementIcon.className = "fa-solid fa-copyright";
    elementSmall.appendChild(elementIcon);

    elementSmall.appendChild(document.createTextNode(" "));
    const elementTimeStart = document.createElement("time");
    elementTimeStart.setAttribute("datetime", "2020");
    elementTimeStart.textContent = "2020";
    elementSmall.appendChild(elementTimeStart);
    elementSmall.appendChild(document.createTextNode("-"));
    const elementTimeEnd = document.createElement("time");
    elementTimeEnd.setAttribute("datetime", "2025");
    elementTimeEnd.textContent = "2025";
    elementSmall.appendChild(elementTimeEnd);

    const elementFooter = document.querySelectorAll("footer");
    elementFooter[0].appendChild(elementFragment);
});

// nav の現在のページだけリンク解除 //
window.addEventListener("DOMContentLoaded", () => {
    const url = location.href;
    const arrayNav = ["research", "publication", "presentation", "private"];

    for (const nav of arrayNav) {
        if (
            url.match(
                /r-nakashima-geophysics(\.github\.io|)(\/$|\/index\.html)/
            )
        ) {
            const elementNav = document.getElementById("nav_home");
            elementNav.classList.add("nav_here");
        } else if (url.includes(`/${nav}.html`)) {
            const elementNav = document.getElementById(`nav_${nav}`);
            elementNav.classList.add("nav_here");
        }
    }
});
