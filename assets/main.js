
//carrossel de produtos :
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//botão voltar para pagina anterior:
// document.getElementById("backbtn").addEventListener("click", 
// function () {
//     window.history.back;
// });