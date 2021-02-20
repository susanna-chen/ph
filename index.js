 $('#navbar-toggle').on('click', function () {
    $('#sidebar').toggleClass('show-side');
    $('#navbar-toggle').toggleClass('open');
 });

 $('#sidebar').on('click', function () {
    $('#sidebar').toggleClass('show-side');
    $('#navbar-toggle').toggleClass('open');
 });

 const images = document.querySelectorAll('.anim');

 observer = new IntersectionObserver((entries) => {

   console.log(entries);
   entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
         entry.target.style.animation = `anim1 1s forwards ease-in-out`;
      } else {
         entry.target.style.animation = `none`
      }
   })

 })

 images.forEach(image => {
   observer.observe(image)
})