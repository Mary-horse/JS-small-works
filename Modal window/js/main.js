let btn = document.getElementById("myBtn");
let modal = document.getElementById("myModal");
let cross = document.getElementById("close");
btn.onclick = function() {
  modal.classList.add("active");
}

cross.onclick = function() {
  modal.classList.remove("active");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("active");
  }
}

//second solution of task
// let btn = document.getElementById("myBtn");
// let modal = document.getElementById("myModal");
// let cross = document.getElementById("close");
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// cross.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
