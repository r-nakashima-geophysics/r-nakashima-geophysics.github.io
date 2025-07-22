// 文字エンコーディング
const elementMetaCharset = document.createElement("meta");
elementMetaCharset.setAttribute("charset", "UTF-8");
document.head.appendChild(elementMetaCharset);

// 検索結果下の説明書き
const elementMetaContent = document.createElement("meta");
elementMetaContent.setAttribute("name", "description");
elementMetaContent.setAttribute(
    "content",
    "Ryosuke Nakashima (中島 涼輔)'s Home Page"
);
document.head.appendChild(elementMetaContent);

// Google Fonts
const elementLinkGoogleFonts = [
    document.createElement("link"),
    document.createElement("link"),
    document.createElement("link"),
];
elementLinkGoogleFonts[0].setAttribute("rel", "preconnect");
elementLinkGoogleFonts[0].setAttribute("href", "https://fonts.googleapis.com");
elementLinkGoogleFonts[1].setAttribute("rel", "preconnect");
elementLinkGoogleFonts[1].setAttribute("href", "https://fonts.gstatic.com");
elementLinkGoogleFonts[1].setAttribute("crossorigin", "true");
elementLinkGoogleFonts[2].setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=BIZ+UDPMincho:wght@400;700&display=swap"
);
elementLinkGoogleFonts[2].setAttribute("rel", "stylesheet");
document.head.appendChild(elementLinkGoogleFonts[0]);
document.head.appendChild(elementLinkGoogleFonts[1]);
document.head.appendChild(elementLinkGoogleFonts[2]);

// Font Awesome Kit
const elementScriptFontAwesome = document.createElement("script");
elementScriptFontAwesome.setAttribute(
    "src",
    "https://kit.fontawesome.com/29824876ec.js"
);
elementScriptFontAwesome.setAttribute("crossorigin", "anonymous");
document.head.appendChild(elementScriptFontAwesome);

// Academicons
const elementLinkAcademicons = document.createElement("link");
elementLinkAcademicons.setAttribute("type", "text/css");
elementLinkAcademicons.setAttribute("rel", "stylesheet");
elementLinkAcademicons.setAttribute(
    "href",
    "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
);
document.head.appendChild(elementLinkAcademicons);

// CSS
const HrefCSS = ["./common/styles/normalize.css", "./common/styles/main.css"];
for (let i = 0; i < HrefCSS.length; i++) {
    const elementLinkCSS = document.createElement("link");
    elementLinkCSS.setAttribute("type", "text/css");
    elementLinkCSS.setAttribute("rel", "stylesheet");
    elementLinkCSS.setAttribute("href", HrefCSS[i]);
    document.head.appendChild(elementLinkCSS);
}

// レスポンシブ用の viewport 設定
const elementMetaViewport = document.createElement("meta");
elementMetaViewport.setAttribute("name", "viewport");
elementMetaViewport.setAttribute(
    "content",
    "width=device-width, initial-scale=1"
);
document.head.appendChild(elementMetaViewport);

// MathJax version 3
// config ファイル読み込み
const elementScriptMathJaxConfig = document.createElement("script");
elementScriptMathJaxConfig.setAttribute(
    "src",
    "./common/mathjax/mathjax_config.js"
);
elementScriptMathJaxConfig.setAttribute("defer", "defer");
document.head.appendChild(elementScriptMathJaxConfig);
// CDN (jsdelivr)
const elementScriptMathJaxCDN = document.createElement("script");
elementScriptMathJaxCDN.setAttribute("id", "MathJax-script");
elementScriptMathJaxCDN.setAttribute("defer", "defer");
elementScriptMathJaxCDN.setAttribute(
    "src",
    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
);
document.head.appendChild(elementScriptMathJaxCDN);

// Google tag (gtag.js)
const elementScriptGoogleAnalytics = [
    document.createElement("script"),
    document.createElement("script"),
];
elementScriptGoogleAnalytics[0].setAttribute("async", "async");
elementScriptGoogleAnalytics[0].setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=G-E28G7ESK53"
);
elementScriptGoogleAnalytics[1] = document.createElement("script");
elementScriptGoogleAnalytics[1].textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-E28G7ESK53');`;
document.head.appendChild(elementScriptGoogleAnalytics[0]);
document.head.appendChild(elementScriptGoogleAnalytics[1]);

// nav の現在のページだけリンク解除
const elementScriptNavHere = document.createElement("script");
elementScriptNavHere.setAttribute("src", "./common/scripts/nav_here.js");
document.head.appendChild(elementScriptNavHere);
