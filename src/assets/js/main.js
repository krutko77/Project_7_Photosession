
// слайдер
$(document).ready(function(){
   $('.slider__items').slick({
      arrows:true,
      dots:true
   });
 })

 //выключение кнопки go-top и прокрутка вверх 
 const goTop = document.querySelector('.go-top');
 window.addEventListener('scroll', function() {
   if (window.scrollY > 0) {
       goTop.style.display = 'block'
   } else {
       goTop.style.display = 'none'
   }
});

let anchors = document.querySelectorAll('a[href="#top"]');
for(let anchor of anchors ) {
anchor.addEventListener('click', function(event) {
    event.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
}
       