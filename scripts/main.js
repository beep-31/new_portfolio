let burger = document.querySelector('#burger'),
    navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    if(navMenu.style.right=='-320px'){
        navMenu.style.right = '0px';
    } else{
        navMenu.style.right = '-320px';
    }
});