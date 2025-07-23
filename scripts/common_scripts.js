// 共通 header //
(() => {
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

    const elementSpan = document.createElement("span");
    elementSpan.textContent = " ";
    elementParagraph.firstChild.after(elementSpan);

    const elementAnchor = document.createElement("a");
    elementAnchor.setAttribute("id", "nav_private");
    elementAnchor.setAttribute("href", "./private.html");
    elementAnchor.textContent = ".";
    elementAnchor.className = "hidden-link";
    elementSpan.after(elementAnchor);

    const elementHeader = document.querySelectorAll("header");
    elementHeader[0].appendChild(elementFragment);
})();

// 共通 footer  //
window.addEventListener("load", () => {
    const elementFragment = new DocumentFragment();

    const elementParagraph = document.createElement("p");
    elementFragment.appendChild(elementParagraph);

    const elementSmall = document.createElement("small");
    elementSmall.innerHTML = `&copy; <time datetime="2020">2020</time>-<time datetime="2025">2025</time>`;
    elementParagraph.appendChild(elementSmall);

    const elementFooter = document.querySelectorAll("footer");
    elementFooter[0].appendChild(elementFragment);
});

// nav の現在のページだけリンク解除 //
window.addEventListener("load", () => {
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
