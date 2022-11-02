url = location.href;

// let fragment = new DocumentFragment();

if (!url.includes("hitasura_linear_analysis")) {
    document.write(`

        <footer>

            <p><small>&copy; <time datetime="2020">2020</time>-<time datetime="2022">2022</time></small></p>

        </footer>

    `);
} else {
    document.write(`

        <footer>

            <p><small>&copy; <time datetime="2022">2022</time>-</small> <a href="../index.html" class="hidden-link">.</a></p>

        </footer>

    `);
}
