var underline = document.getElementsByClassName("interior-category:after");;
var underlineLength = document.getElementById("writing-category");

alert(underlineLength.length);

var i;
for (i = 0; i < underline.length; i++) {
    underline[i].style.width = .75 * underlineLength.length;
}