// /*global $ */


// $(function () {
//     'use strict';
//     $('.info-list li').click(function () {
//         $(this).addClass('selected').siblings('li').removeClass('selected');
//         $('.info-content div').hide();
//         $('.' + $(this).data('class')).fadeIn();
//     });
// });



let liList = document.querySelectorAll(".info-list li");
let divList = document.querySelectorAll(".info-content div");


liList.forEach((li) => {
    li.addEventListener("click", function ()  {
        liList.forEach((li) => {
            li.classList.remove("selected")
            
        })
        this.classList.add("selected")
        divList.forEach((div) => {
            div.style.display = "none"
        })
        let divToShow = document.querySelector("." + this.dataset.class)
        divToShow.style.display = "block"
})})
