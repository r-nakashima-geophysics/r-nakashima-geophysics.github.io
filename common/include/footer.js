{
    const elementFragment = new DocumentFragment();

    const elementParagraph = document.createElement("p");
    elementFragment.appendChild(elementParagraph);

    const elementSmall = document.createElement("small");
    elementSmall.innerHTML = `&copy; <time datetime="2020">2020</time>-<time datetime="2025">2025</time>`;
    elementParagraph.appendChild(elementSmall);

    const elementFooter = document.querySelectorAll("footer");
    elementFooter[0].appendChild(elementFragment);
}
