{
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
}
