// Click on icon to toggle between adding and removing the "responsive" class to topnav

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Click to show submenu1

// When the user clicks on the button,
// toggle between hiding and showing the dropdown content
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches(".dropbtnX")) {
    var myDropdown = document.getElementById("myDropdown1");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

//Click to show submenu3
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches(".dropbtnX")) {
    var myDropdown = document.getElementById("myDropdown3");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
//Click to show submenu2
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches(".dropbtnX")) {
    var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
