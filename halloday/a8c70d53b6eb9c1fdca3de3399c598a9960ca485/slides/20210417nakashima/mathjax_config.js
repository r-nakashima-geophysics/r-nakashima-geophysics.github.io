window.MathJax = {

tex: {
    // 本文中の数式 //
    inlineMath: [
        ['$', '$']
    ],
    // ディスプレイ数式モード //
    displayMath: [
        ['\\[', '\\]']
    ],
    // マクロ //
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
        upi: "{\\large\\unicode[0.5,0.05][Times New Roman]{x3c0}}",
        upartial: "{\\large\\unicode[0.5,0.05][Times New Roman]{x2202}}"
    }
},

svg: {
    fontCache: 'global'
}

};
