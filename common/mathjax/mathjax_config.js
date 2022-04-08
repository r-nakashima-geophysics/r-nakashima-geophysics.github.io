window.MathJax = {
    loader: {
        load: ['[tex]/upgreek']
    },

    tex: {
        packages: {
            '[+]': ['upgreek']
        },

        // インライン数式 //
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ],

        // ディスプレイ数式 //
        displayMath: [
            ['\\[', '\\]']
        ],

        // 自動ナンバリング //
        tags: 'ams',

        macros: {
            bm: ["{\\boldsymbol{#1}}", 1],

            ip: "{\\boldsymbol{\\cdot}}",
            div: "{\\boldsymbol{\\nabla}\\ip}",
            rot: "{\\boldsymbol{\\nabla}\\times}",

            uO: "{\\mathrm{O}}",
            ud: "{\\mathrm{d}}",
            uD: "{\\mathrm{D}}",
            ue: "{\\mathrm{e}}",
            ui: "{\\mathrm{i}}",
            ul: "{\\ell}",
            upi: "{\\uppi}",
            upartial: "{\\partial}"
        }

    },

    svg: {
        fontCache: 'global'
    }
};
