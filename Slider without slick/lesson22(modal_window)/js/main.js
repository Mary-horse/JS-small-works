let btn = document.getElementById("myBtn");
let modal = document.getElementById("myModal");
let cross = document.getElementById("close");
btn.onclick = function() {
  //modal.style.display = "block";
  modal.classList.add("active");
}

cross.onclick = function() {
  modal.classList.add("passive");
}

// let btn = document.getElementById("myBtn");
// let modal = document.getElementById("myModal");
// let cross = document.getElementById("close");
// btn.onclick = function() {
//   modal.style.display = "block";
//   // modal.classList.add("active");
// }

// cross.onclick = function() {
//   modal.style.display = "none";
//   // modal.classList.add("passive");
// }

// let btn = document.getElementById("myBtn");
// let modal = document.getElementById("myModal");
// let cross = document.getElementById("close");

// function showModal() {
//   modal.classList.add("active");
// }

// function hiddenModal() {
//   modal.classList.add("passive");
// }

// btn.addEventListener("click", showModal);
// cross.addEventListener("click", hiddenModal);