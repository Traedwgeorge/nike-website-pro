/* header sticky */

window.onscroll = function() {myFunction()};

var header = document.getElementById(".header")

var sticky = header.offsetbot;


function myfunction() {
  if (window.pageYoffset > sticky) {
    header.classList.add("sticky");
  }

  else {
    header.classList.remove("sticky")
  }
}
