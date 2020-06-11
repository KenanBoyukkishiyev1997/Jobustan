// Header Nav Bgen
function openNav() {
  document.getElementById("myResponsive").style.width = "260px";
  document.getElementById("navbar").style.color = "transparent";
}

function closeNav() {
  document.getElementById("myResponsive").style.width = "0";
  document.getElementById("navbar").style.color = "#c33d6e";
}

// Header Nav End

function OpensubShare(){
  document.getElementById("share").style.visibility = "visible";
}



//Section Blog Subscribe Bigen

function Opensubscribe() {
  document.getElementById("Opensubscribe").style.backgroundColor = "#c33d6e";
  document.getElementById("Opensubscribe").style.color = "#fff";
}

//Section Blog Subscribe End


var dropdown = document.getElementsByClassName("Responsive__menu__item__link");
var i;


for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active1");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}




