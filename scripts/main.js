let burger = document.querySelector('#burger'),
    burgerElement = document.querySelector('#burger_element'),
    navMenu = document.querySelector('#nav-menu'),
    opened = 'burger__item--opened',
    closed = 'burger__item--closed';
burger.addEventListener('click', function(){
    if(navMenu.style.right=='-320px'){
        navMenu.style.right = '0px';
        burgerElement.classList.remove(closed);
        burgerElement.classList.add(opened);
        
    } else{
        navMenu.style.right = '-320px';
        burgerElement.classList.remove(opened);
        burgerElement.classList.add(closed);
    }
});