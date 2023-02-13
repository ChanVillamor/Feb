document.getElementById("yesbtn").addEventListener("click", function() {
    alert("ay ay ay ay joke lng po alam ko wala po mag yaya sa inyo bukas kase walng pong nag mamahal sa inyo. Kaya matulog ng 24hrs bukas, gumising lng kayo pag feb 15 nah. HAHHAHHHAAHHAHHA")

});

var b = document.getElementById("nobtn");
b.addEventListener("click", change);
function change() {
    var i = Math.floor(Math.random()*1000)+1;
    var j = Math.floor(Math.random()*700)+1;
    b.style.left = i+="px";
    b.style.top = j+="px";
}