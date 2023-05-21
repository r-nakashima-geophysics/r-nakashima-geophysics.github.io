window.MathJax = {
    loader: {
        load: ["[tex]/cancel", "[tex]/upgreek"],
    },

    tex: {
        packages: {
            "[+]": ["cancel"],
            "[+]": ["upgreek"],
        },

        // インライン数式 //
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],

        // ディスプレイ数式 //
        displayMath: [["\\[", "\\]"]],

        // 自動ナンバリング //
        tags: "ams",

        macros: {
            bm: ["{\\boldsymbol{#1}}", 1],

            ip: "{\\boldsymbol{\\cdot}}",
            div: "{\\boldsymbol{\\nabla}\\ip}",
            rot: "{\\boldsymbol{\\nabla}\\times}",

            uppartial: "\\unicode[]{x2202}",
            upO: "{\\mathrm{O}}",
            upl: "{\\ell}",
            upd: "{\\mathrm{d}}",
            upD: "{\\mathrm{D}}",
            upe: "{\\mathrm{e}}",
            upi: "{\\mathrm{i}}",
        },
    },

    svg: {
        fontCache: "global",
    },
};
