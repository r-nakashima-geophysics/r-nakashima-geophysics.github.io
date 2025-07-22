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

            upO: "{\\mathrm{O}}",
            upd: "{\\mathrm{d}}",
            upD: "{\\mathrm{D}}",
            upe: "{\\mathrm{e}}",
            upi: "{\\mathrm{i}}",
            upl: "{\\ell}",
            uppartial: "{\\partial}"
        }

    },

    svg: {
        fontCache: 'global'
    }
}
