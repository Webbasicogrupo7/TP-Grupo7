function fnPrueba() {
    console.log("hola mundo");
}


const myCarousel = document.getElementById('carouselExampleCaptions1');
console.log(myCarousel);
// myCarousel.addEventListener('slide.bs.carousel', fnPrueba);
myCarousel.addEventListener('click', fnPrueba);


const pru=document.getElementsByClassName("carousel-control-next");
console.log(pru);
fnPrueba();
