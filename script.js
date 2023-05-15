$(document).ready(function(){
    $(window).scroll(function){
        if(this.scrollY > 20){
                $('.navBar').addClass("sticky");

        }else{
                $('.navBar').removeClass("sticky");
        }
    });
    
    $('.menu-btn').click(function()){
        $('.navbar .menu'). toggleClass("active");
        $('.menu-btn'). toggleClass("active");
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });