$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});

window.onscroll = () => {
    scrollBtnTop();
}

function scrollBtnTop(){
    let btn = document.getElementById("btn-top");
    if(document.documentElement.scrollTop > 50){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}

function backToTop(){
    document.documentElement.scrollTop = 0;
}