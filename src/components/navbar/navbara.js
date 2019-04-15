import $ from 'jquery';
export function navsolid(){
    $(window).scroll(function(){
        $('.nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
}