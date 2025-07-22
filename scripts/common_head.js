{
    const elementFragment = new DocumentFragment();

    // 文字エンコーディング //
    const elementMetaCharset = document.createElement("meta");
    elementMetaCharset.setAttribute("charset", "UTF-8");
    elementFragment.appendChild(elementMetaCharset);

    // 検索結果下の説明書き //
    const elementMetaContent = document.createElement("meta");
    elementMetaContent.setAttribute("name", "description");
    elementMetaContent.setAttribute(
        "content",
        "Ryosuke Nakashima (中島 涼輔)'s Home Page"
    );
    elementFragment.appendChild(elementMetaContent);

    // Google Fonts //
    const elementLinkGoogleFonts = new Array(3).fill(
        document.createElement("link")
    );
    elementLinkGoogleFonts[0].setAttribute("rel", "preconnect");
    elementLinkGoogleFonts[0].setAttribute(
        "href",
        "https://fonts.googleapis.com"
    );
    elementLinkGoogleFonts[1].setAttribute("rel", "preconnect");
    elementLinkGoogleFonts[1].setAttribute(
        "href",
        "https://fonts.gstatic.com"
    );
    elementLinkGoogleFonts[1].setAttribute("crossorigin", "true");
    elementLinkGoogleFonts[2].setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=BIZ+UDPMincho:wght@400;700&display=swap"
    );
    elementLinkGoogleFonts[2].setAttribute("rel", "stylesheet");
    for (const element of elementLinkGoogleFonts) {
        elementFragment.appendChild(element);
    }

    // Font Awesome Kit //
    const elementScriptFontAwesome = document.createElement("script");
    elementScriptFontAwesome.setAttribute(
        "src",
        "https://kit.fontawesome.com/29824876ec.js"
    );
    elementScriptFontAwesome.setAttribute("crossorigin", "anonymous");
    elementFragment.appendChild(elementScriptFontAwesome);

    // Academicons //
    const elementLinkAcademicons = document.createElement("link");
    elementLinkAcademicons.setAttribute("type", "text/css");
    elementLinkAcademicons.setAttribute("rel", "stylesheet");
    elementLinkAcademicons.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
    );
    elementFragment.appendChild(elementLinkAcademicons);

    // CSS //
    const pathStyleSheets = ["./min/normalize.min.css", "./min/main.min.css"];
    for (const path of pathStyleSheets) {
        const elementLinkStyleSheet = document.createElement("link");
        elementLinkStyleSheet.setAttribute("type", "text/css");
        elementLinkStyleSheet.setAttribute("rel", "stylesheet");
        elementLinkStyleSheet.setAttribute("href", path);
        elementFragment.appendChild(elementLinkStyleSheet);
    }

    // レスポンシブ用の viewport 設定 //
    const elementMetaViewport = document.createElement("meta");
    elementMetaViewport.setAttribute("name", "viewport");
    elementMetaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1"
    );
    elementFragment.appendChild(elementMetaViewport);

    // MathJax version 3 //
    // config ファイル読み込み //
    const elementScriptMathJaxConfig = document.createElement("script");
    elementScriptMathJaxConfig.setAttribute(
        "src",
        "./min/mathjax_config.min.js"
    );
    elementScriptMathJaxConfig.setAttribute("defer", "defer");
    elementFragment.appendChild(elementScriptMathJaxConfig);
    // CDN (jsdelivr) //
    const elementScriptMathJaxDelivery = document.createElement("script");
    elementScriptMathJaxDelivery.setAttribute("id", "MathJax-script");
    elementScriptMathJaxDelivery.setAttribute("defer", "defer");
    elementScriptMathJaxDelivery.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    );
    elementFragment.appendChild(elementScriptMathJaxDelivery);

    // Google tag (gtag.js) //
    const elementScriptGoogleAnalytics = new Array(2).fill(
        document.createElement("script")
    );
    elementScriptGoogleAnalytics[0].setAttribute("async", "async");
    elementScriptGoogleAnalytics[0].setAttribute(
        "src",
        "https://www.googletagmanager.com/gtag/js?id=G-E28G7ESK53"
    );
    elementScriptGoogleAnalytics[1].textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E28G7ESK53');`;
    for (const elementScript of elementScriptGoogleAnalytics) {
        elementFragment.appendChild(elementScript);
    }

    document.head.appendChild(elementFragment);
}
