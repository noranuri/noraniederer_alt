// Click on icon to toggle between adding and removing the "responsive" class to topnav

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// dropdown - submenu
// toggle between hiding and showing the dropdown content

// Click to show dropdown submenu1 - angebot
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

//Click to show dropdown submenu2 - fotografie
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

//Click to show dropdown submenu3 - natur & kunst
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it // deleted because it was not working properly...

// window.onclick = function(e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("myDropdown1");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };

// window.onclick = function(e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("myDropdown2");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };

// window.onclick = function(e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("myDropdown3");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };
