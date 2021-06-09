var slideIndex = 1;
showSlides(slideIndex);

//function, which > (increases) index on 1 and show next slide
function addSlide() {
   showSlides(slideIndex += 1);
}

function delSlide() {
   showSlides(slideIndex -= 1);
}

//current slide
function currentSlide(n) {
   showSlides(slideIndex = n);
}

//main function, which moves slides
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("item");
   var dots = document.getElementsByClassName("slider-dots_item");
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //can use addclass
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block"; //can use addclass
   dots[slideIndex - 1].className += " active";
}