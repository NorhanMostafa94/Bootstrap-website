window.onscroll = ()=>{
    var nav = document.querySelector(".navbar");
    if(this.scrollY <= 100){
        nav.classList.remove('navbar-white');
        nav.classList.remove('fixed-top');
    }
    else {
        nav.classList.add('navbar-white');
        nav.classList.add('fixed-top');
    }
}

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = (scrollTop / 2)*-1 + 'px';
    $('.moveUp').css('transform', 'translateY(' + imgPos + ')');
});