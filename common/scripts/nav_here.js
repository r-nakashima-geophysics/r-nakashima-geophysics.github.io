url = location.href;

nav_list = ["research", "publication", "presentation", "private"];

window.onload = () => {
    for (const nav_name of nav_list) {
        if (
            url.match(/r-nakashima-geophysics(.github.io|)(\/$|\/index.html)/)
        ) {
            const elementNav = document.getElementById("nav_home");
            elementNav.classList.add("nav_here");
        } else if (url.includes("hitasura_linear_analysis/index.html")) {
            const elementNav = document.getElementById("nav_top");
            elementNav.classList.add("nav_here");
        } else if (url.includes(`/${nav_name}.html`)) {
            const elementNav = document.getElementById(`nav_${nav_name}`);
            elementNav.classList.add("nav_here");
        }
    }
};
