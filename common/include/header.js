url = location.href;

if (!url.includes('hitasura_linear_analysis')) {

    document.write(`

        <header>

        <h1>Ryosuke Nakashima (中島 涼輔) 's Home Page</h1>
        <nav>
            <p>
                <a href="./index.html" id="nav_home"><i class="fa-solid fa-house-chimney"></i><span class="link-text">Home</span></a> <a href="./private.html" id="nav_private" class="hidden-link">.</a><br>

                <a href="./research.html" id="nav_research"><i class="fas fa-flask"></i><span class="link-text">Research</span></a><br>

                <a href="./publication.html" id="nav_publication"><i class="fa-regular fa-file-lines"></i><span class="link-text">Publications</span></a><br>

                <a href="./presentation.html" id="nav_presentation"><i class="fas fa-chalkboard-teacher"></i><span class="link-text">Presentations</span></a><br>
            </p>
        </nav>

        </header>

    `);

} else {

    document.write(`

        <header>

        <h1>ひたすら線形解析</h1>
        <nav>
            <p>
                <a href="./index.html" id="nav_top"><span class="link-text">TOPページ</span></a> <span class="sub-index"> ( <a href="./index.html#privacy-policy" class="sub-index"><span class="link-text">プライバシーポリシー</span></a> <a href="./index.html#contact-form" class="sub-index"><span class="link-text">お問い合わせ</span></a> )</span><br>

                <span class="index-arrow"></span> <a href="./kiso.html" id="nav_kiso"><span class="link-text">線形解析の基礎</span></a><br>

                <span class="index-arrow"></span> <a href="./governing.html" id="nav_governing"><span class="link-text">基礎方程式</span></a> <span class="sub-index"> ( 流体 回転流体 電磁流体 弾性体 )</span><br>

                <span class="index-arrow"></span> <a href="./detail.html" id="nav_detail"><span class="link-text">線形解析各論</span></a><br>

                <span class="index-arrow"></span> <a href="./other.html" id="nav_other"><span class="link-text">その他</span></a><br>
            </p>
        </nav>

        </header>

    `);

}
