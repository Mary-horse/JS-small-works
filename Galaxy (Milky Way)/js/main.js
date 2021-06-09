let stars = $(window).width(); 

for (let i = 0; i <= 100; i++) {
   let stars_start = $("<div>").addClass("star star_" + i).css ({
      top: Math.floor(Math.random() * 800),  //position of stars
      left: Math.floor(Math.random() * stars)
   }).appendTo(".stars")

}