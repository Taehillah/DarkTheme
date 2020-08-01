var mmele = document.querySelector('body'),
    konopo1 = document.querySelector('#li1'),
    konopo2 = document.querySelector('#li2'),
    konopo3 = document.querySelector('#li3'),
    lesaka = document.querySelector('#container'),
    senepe1 = document.querySelector("#pic1"),
    senepe2 = document.querySelector("#pic2"),
    senepe3 = document.querySelector("#pic3"),
    senepe1hover = document.querySelector("#pic1hover"),
    senepe2hover = document.querySelector("#pic2hover"),
    senepe3hover = document.querySelector("#pic3hover");


function darkerTheme() {
    konopo1.style.color = "white";
    konopo1.style.backgroundColor = "rgba(39, 39, 39, 0.8)";
    konopo1.style.border = "1px solid rgb(255,215,0,0.1)"
    konopo2.style.color = "white";
    konopo2.style.backgroundColor = "rgba(39, 39, 39, 0.8)";
    konopo2.style.border = "1px solid rgb(255,215,0,0.1)"
    konopo3.style.color = "white";
    konopo3.style.backgroundColor = "rgba(39, 39, 39, 0.8)";
    konopo3.style.border = "1px solid rgb(255,215,0,0.1)"
    mmele.style.backgroundColor = "#272727";
    lesaka.style.backgroundColor = "#121212"

}

function lighterTheme() {
    konopo1.style.color = "#FFFFFF";
    konopo1.style.backgroundColor = "blue";
    konopo2.style.color = "#FFFFFF";
    konopo2.style.backgroundColor = "blue";
    konopo3.style.color = "#FFFFFF";
    konopo3.style.backgroundColor = "blue";
    lesaka.style.backgroundColor = "blue";
    mmele.style.backgroundColor = "#FFFFFF";
}

function hoverer1() {
    senepe1.style.display = 'none';
    senepe1hover.style.display = 'block';
}

function hoverer2() {
    senepe2.style.display = 'none';
    senepe2hover.style.display = 'block';
}

function hoverer3() {
    senepe3.style.display = 'none';
    senepe3hover.style.display = 'block';
}

function undo() {
    senepe1.style.display = 'block';
    senepe1hover.style.display = 'none';
    senepe2.style.display = 'block';
    senepe2hover.style.display = 'none';
    senepe3.style.display = 'block';
    senepe3hover.style.display = 'none';
}