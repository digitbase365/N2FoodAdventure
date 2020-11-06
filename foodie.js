//  Header Scroll Fixation

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 220);
})

var menuToggle = document.querySelector('.menuToggle');
var navigation = document.querySelector('.navigation');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
 



