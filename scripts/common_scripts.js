{
    const elementFragment = new DocumentFragment();

    // 共通 header の読み込み //
    const elementScriptHeader = document.createElement("script");
    elementScriptHeader.setAttribute("src", "./min/header.min.js");
    elementScriptHeader.setAttribute("defer", "defer");
    elementFragment.appendChild(elementScriptHeader);

    // 共通 footer の読み込み //
    const elementScriptFooter = document.createElement("script");
    elementScriptFooter.setAttribute("src", "./min/footer.min.js");
    elementScriptFooter.setAttribute("defer", "defer");
    elementFragment.appendChild(elementScriptFooter);

    // nav の現在のページだけリンク解除 //
    const elementScriptNavHere = document.createElement("script");
    elementScriptNavHere.setAttribute("src", "./min/nav_here.min.js");
    elementFragment.appendChild(elementScriptNavHere);

    document.head.appendChild(elementFragment);
}
