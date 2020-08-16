// burger menu 
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

//slider

function sliderHide(content, btns){
    for(let i = 0; i<content.length;i++){
        content[i].classList.remove('about__txt--active');
    }

    for(let i = 0; i<btns.length;i++){
        btns[i].classList.remove('lang--active');
    }
}

function sliderShow(n){
    sliderTxt[n].classList.add('about__txt--active');
    sliderBtns[n].classList.add('lang--active');
}

let sliderTxt = document.querySelectorAll('.about__txt'),
    sliderBtns = document.querySelectorAll('.lang'),
    slider = document.querySelector('#slider');

slider.addEventListener('click', function(event){
    let target = event.target;
    if(target && target.classList.contains('lang')){
        sliderHide(sliderTxt, sliderBtns);
        for(let i = 0;i<sliderBtns.length;i++){
            if(target==sliderBtns[i]){
                sliderShow(i);
            }
        }
    }
});

//contact form

let mail_input = document.querySelector('#input__email'),
    mail_label = document.querySelector('#email__label');

mail_input.addEventListener('focusout', function(){
    if(!mail_input.checkValidity()){
        mail_input.style.borderColor = '#fc1f17';
        mail_label.style.color = '#fc1f17';
        mail_label.style.top = '-10px';
        mail_label.style.fontSize = '10px';
    } else if(mail_input.checkValidity()){
        mail_input.style.borderColor = '#00ffff';
        mail_label.style.color = '#cecece';
        mail_label.style.top = '-10px';
        mail_label.style.fontSize = '10px';
    }
    if (mail_input.value == ''){
        mail_input.style.borderColor = '#00ffff';
        mail_label.style.color = '#cecece';
        mail_label.style.top = '0px';
        mail_label.style.fontSize = '16px';
    }
});

mail_input.addEventListener('focus', function(){
    mail_input.style.borderColor = '#fc5417';
    mail_label.style.color = '#cecece';
    mail_label.style.top = '-10px';
    mail_label.style.fontSize = '10px';
});
