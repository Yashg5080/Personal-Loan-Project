function show() {
  ele = document.getElementById("dropdown-content1");
  ele1 = document.getElementById("dropdown-content2");
  ele2 = document.getElementById("dropdown-content3");
  if (ele1.style.display === "flex") ele1.style.display = "none";
  if (ele2.style.display === "flex") ele2.style.display = "none";
  ele.style.display = "flex";
}

function hide() {
  ele = document.getElementById("dropdown-content1");
  ele.onmouseover = function () {
    ele.style.display = "flex";
  };
  ele.onmouseout = function () {
    ele.style.display = "none";
  };
}

function show1() {
  ele1 = document.getElementById("dropdown-content1");
  ele2 = document.getElementById("dropdown-content3");
  if (ele1.style.display === "flex") ele1.style.display = "none";
  if (ele2.style.display === "flex") ele2.style.display = "none";
  ele = document.getElementById("dropdown-content2");
  ele.style.display = "flex";
}

function hide1() {
  ele = document.getElementById("dropdown-content2");
  ele.onmouseover = function () {
    ele.style.display = "flex";
  };
  ele.onmouseout = function () {
    ele.style.display = "none";
  };
}

function show2() {
  ele1 = document.getElementById("dropdown-content1");
  ele2 = document.getElementById("dropdown-content2");
  if (ele1.style.display === "flex") ele1.style.display = "none";
  if (ele2.style.display === "flex") ele2.style.display = "none";
  ele = document.getElementById("dropdown-content3");
  ele.style.display = "flex";
}

function hide2() {
  ele = document.getElementById("dropdown-content3");
  ele.onmouseover = function () {
    ele.style.display = "flex";
  };
  ele.onmouseout = function () {
    ele.style.display = "none";
  };
}
// hamburger

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openNav1() {
  document.getElementById("loan").style.width = "250px";

}
function closeNav1() {
  document.getElementById("loan").style.width = "0";
}
function openNav2() {
  document.getElementById("calculator").style.width = "250px";

}
function closeNav2() {
  document.getElementById("calculator").style.width = "0";
}
function openNav3() {
  document.getElementById("card").style.width = "250px";

}
function closeNav3() {
  document.getElementById("card").style.width = "0";
}