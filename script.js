window.onscroll = function() {
    myNavFunction()
}
var eseNav = document.getElementById("ese-nav")
var sticky = eseNav.offsetTop

function myNavFunction() {
    if (window.pageYOffset >= sticky) {
        eseNav.classList.add("sticky")
    } else {
        eseNav.classList.remove("sticky")
    }
}
const readmoreEl1 = document.getElementById("readmore1")

function readmore1() {
    readmoreEl1.innerText +=" " + "Animi recusandae odit asperiores consectetur provident maiores ad nobis aspernatur excepturi vitae nam eligendi, commodi labore autem temporibus laudantium exercitationem tempore quidem"
    document.getElementById("btn1").style.display = "none";
}

const readmoreEl2 = document.getElementById("readmore2")

function readmore2() {
    readmoreEl2.innerText +=" " + "Animi recusandae odit asperiores consectetur provident maiores ad nobis aspernatur excepturi vitae nam eligendi, commodi labore autem temporibus laudantium exercitationem tempore quidem"
    document.getElementById("btn2").style.display = "none";
}

const readmoreEl3 = document.getElementById("readmore3")

function readmore3() {
    readmoreEl3.innerText +=" " + "Animi recusandae odit asperiores consectetur provident maiores ad nobis aspernatur excepturi vitae nam eligendi, commodi labore autem temporibus laudantium exercitationem tempore quidem"
    document.getElementById("btn3").style.display = "none";
}

