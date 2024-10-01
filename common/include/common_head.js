url = location.href;

if (!url.includes("hitasura_linear_analysis")) {
    description = "Ryosuke Nakashima (中島 涼輔)'s Home Page";
    path = ".";
    add_css = "";
} else {
    description = "ひたすら線形解析";
    path = "..";
    add_css =
        '<link type="text/css" rel="stylesheet" href="../common/styles/hla.css">';
}

// let fragment = new DocumentFragment();

document.write(`

    <!-- 文字エンコーディング　-->
    <meta charset="UTF-8">

    <!-- 検索結果下の説明書き -->
    <meta name="description" content="${description}">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho:wght@400;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Kit -->
    <script src="https://kit.fontawesome.com/29824876ec.js" crossorigin="anonymous"></script>

    <!-- Academicons -->
    <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

    <!-- CSS -->
    <link type="text/css" rel="stylesheet" href="${path}/common/styles/normalize.css">
    <link type="text/css" rel="stylesheet" href="${path}/common/styles/main.css">
    ${add_css}

    <!-- レスポンシブ用の viewpoint 設定 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- MathJax version 3 -->
    <!-- config ファイル読み込み -->
    <script src="${path}/common/mathjax/mathjax_config.js" defer></script>
    <!-- CDN (jsdelivr) -->
    <script id="MathJax-script" defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-E28G7ESK53"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E28G7ESK53');
    </script>

    <!-- nav の現在のページだけリンク解除 -->
    <script src="${path}/common/scripts/nav_here.js"></script>

`);
