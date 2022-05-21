window.onload = () => {
    const slides = document.getElementsByClassName("slide");

    let info_header;
    let info_footer;
    for (let slide of slides) {
        info_header = slide.contentWindow.document.getElementById("info_header")
        info_header.style.display = 'none';

        slide_number = slide.contentWindow.document.getElementsByClassName("slide-number")
        slide_number[0].style.display = 'none';

        controls = slide.contentWindow.document.getElementsByClassName("controls")
        controls[0].style.display = 'none';

        progress = slide.contentWindow.document.getElementsByClassName("progress")
        progress[0].style.display = 'none';

        info_footer = slide.contentWindow.document.getElementById("info_footer")
        info_footer.style.display = 'none';
    }
}
